
import React, { useState, useEffect, useRef } from 'react';
import { Category, Team, GameState, RoundResult, GameSettings, WordItem } from './types';
import SetupView from './components/SetupView';
import CategorySelectionView from './components/CategorySelectionView';
import GameView from './components/GameView';
import ResultsView from './components/ResultsView';
import { fetchWordList } from './services/geminiService';
import { soundService } from './services/soundService';

const Confetti: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const particles: any[] = [];
    const colors = ['#6366f1', '#ec4899', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < 200; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 3 + 2,
        angle: Math.random() * 6,
        spin: Math.random() * 0.2 - 0.1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.y += p.speed;
        p.angle += p.spin;
        if (p.y > canvas.height) p.y = -20;
        
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-[100]" />;
};

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>('setup');
  const [teams, setTeams] = useState<Team[]>([]);
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [wordList, setWordList] = useState<WordItem[]>([]);
  const [roundResults, setRoundResults] = useState<RoundResult[]>([]);
  const [settings, setSettings] = useState<GameSettings>({
    roundDuration: 60,
    categories: [Category.ANIMALS, Category.COUNTRIES, Category.BRANDS, Category.MIMICRY]
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (teams.length === 0 && gameState !== 'setup') {
      setGameState('setup');
    }
  }, [teams, gameState]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [gameState]);

  const onTeamsDefined = (newTeams: Team[]) => {
    setTeams(newTeams);
    setGameState('category-selection');
  };

  const onSettingsDefined = (selectedSettings: GameSettings) => {
    setSettings(selectedSettings);
    setCurrentTeamIndex(0);
    setCurrentCategoryIndex(0);
    setGameState('waiting');
  };

  const prepareRound = async () => {
    setIsLoading(true);
    const category = settings.categories[currentCategoryIndex];
    // Solicitamos mazo completo (hasta 140 para las categorías más grandes)
    const words = await fetchWordList(category, 140);
    setWordList(words);
    setIsLoading(false);
    setGameState('playing');
  };

  const endRound = (results: RoundResult[]) => {
    setRoundResults(results);
    const roundScore = results.filter(r => r.correct).length;
    
    setTeams(prev => {
      const newTeams = [...prev];
      if (newTeams[currentTeamIndex]) {
        newTeams[currentTeamIndex].score += roundScore;
      }
      return newTeams;
    });

    setGameState('round-results');
  };

  const nextTurn = () => {
    if (currentTeamIndex < teams.length - 1) {
      setCurrentTeamIndex(prev => prev + 1);
      setGameState('waiting');
    } else {
      if (currentCategoryIndex < settings.categories.length - 1) {
        setCurrentCategoryIndex(prev => prev + 1);
        setCurrentTeamIndex(0);
        setGameState('waiting');
      } else {
        setGameState('game-over');
        soundService.playVictory();
      }
    }
  };

  const restartApp = () => {
    soundService.playPop();
    setGameState('setup');
    setCurrentTeamIndex(0);
    setCurrentCategoryIndex(0);
    setTeams([]);
  };

  const currentCategory = settings.categories[currentCategoryIndex];
  const activeTeam = teams[currentTeamIndex] || { name: '...', color: 'slate', score: 0 };

  if (gameState === 'playing') {
    return (
      <GameView 
        wordList={wordList} 
        duration={settings.roundDuration} 
        onEnd={endRound} 
        teamColor={activeTeam.color}
        categoryName={currentCategory}
      />
    );
  }

  return (
    <div className="min-h-screen gradient-bg flex flex-col items-center justify-center p-4 sm:p-6">
      {gameState === 'game-over' && <Confetti />}
      <div className="w-full max-w-lg bg-slate-800/50 backdrop-blur-lg border border-slate-700/50 rounded-[2.5rem] shadow-2xl flex flex-col relative transition-all duration-300 overflow-hidden max-h-[90vh]">
        {gameState === 'setup' && (
          <SetupView onNext={onTeamsDefined} />
        )}

        {gameState === 'category-selection' && (
          <CategorySelectionView 
            onStart={onSettingsDefined} 
            onBack={() => setGameState('setup')}
          />
        )}

        {gameState === 'waiting' && (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 min-h-[500px]">
            <div className="space-y-2">
               <span className="bg-indigo-500/20 text-indigo-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-indigo-500/30">
                 Ronda {currentCategoryIndex + 1} de {settings.categories.length}
               </span>
               <h2 className="text-4xl font-black text-white">{currentCategory}</h2>
            </div>

            <div className={`w-40 h-40 rounded-3xl flex flex-col items-center justify-center shadow-2xl border-4 transform transition-all duration-500 hover:rotate-0 rotate-3 bg-${activeTeam.color}-600 border-${activeTeam.color}-400 shadow-${activeTeam.color}-500/20`}>
              <span className="text-xs font-bold opacity-80 uppercase text-white/70">Turno de</span>
              <span className="text-xl font-black leading-tight px-4 text-center text-white">{activeTeam.name}</span>
            </div>

            <div className="bg-slate-900/40 p-6 rounded-2xl border border-slate-700 w-full">
               <p className="text-slate-400 text-sm mb-4 italic">Coloca el teléfono frente a tu frente después de pulsar el botón.</p>
               <button
                  onClick={prepareRound}
                  disabled={isLoading}
                  className={`w-full bg-white text-slate-900 hover:bg-slate-100 font-black py-5 rounded-xl transition-all active:scale-95 disabled:opacity-50 text-xl shadow-lg`}
                >
                  {isLoading ? 'CARGANDO...' : '¡EMPEZAR RONDA!'}
                </button>
            </div>

            {isLoading && (
              <div className="absolute inset-0 bg-slate-900/90 flex flex-col items-center justify-center z-50 rounded-3xl">
                <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="font-semibold text-lg text-white">Cargando categoría: {currentCategory}...</p>
                <p className="text-xs text-slate-400 mt-2">Preparando palabras masivas...</p>
              </div>
            )}
          </div>
        )}

        {gameState === 'round-results' && (
          <ResultsView 
            results={roundResults} 
            teamName={activeTeam.name} 
            teamColor={activeTeam.color} 
            teams={teams}
            onNext={nextTurn} 
          />
        )}

        {gameState === 'game-over' && (
          <div className="flex-1 flex flex-col items-center p-5 sm:p-8 text-center space-y-4 sm:space-y-6 min-h-0 z-10">
            <div className="shrink-0 space-y-2 mt-2">
               <div className="text-4xl sm:text-6xl animate-bounce-subtle mx-auto">🏆</div>
               <div className="space-y-0.5">
                  <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">¡Fin del Juego!</h2>
                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">Marcadores Finales</p>
               </div>
            </div>

            <div className="w-full flex-1 overflow-y-auto pr-1 space-y-3 custom-scrollbar">
               {[...teams].sort((a, b) => b.score - a.score).map((team, idx) => (
                 <div key={team.name} className={`flex items-center justify-between p-4 sm:p-5 rounded-2xl border-2 transition-all ${
                    idx === 0 ? `bg-${team.color}-600/20 border-${team.color}-500 shadow-lg shadow-${team.color}-500/10` : 'bg-slate-800/40 border-slate-700'
                 }`}>
                    <div className="flex items-center gap-3 min-w-0">
                       <span className={`text-xl font-black ${idx === 0 ? 'text-white' : 'opacity-30'}`}>#{idx + 1}</span>
                       <div className="text-left min-w-0">
                          <p className="font-black text-sm sm:text-lg truncate leading-tight text-white">{team.name}</p>
                          <p className={`text-[8px] font-bold uppercase text-${team.color}-400 opacity-60`}>
                             Equipo {team.color}
                          </p>
                       </div>
                    </div>
                    <div className="text-right shrink-0">
                       <span className="text-2xl sm:text-3xl font-black tabular-nums text-white">{team.score}</span>
                       <span className="block text-[8px] font-bold text-slate-500 uppercase">Puntos</span>
                    </div>
                 </div>
               ))}
            </div>
            
            <button
              onClick={restartApp}
              className="w-full shrink-0 bg-slate-100 text-slate-900 hover:bg-white py-4 sm:py-5 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95 uppercase tracking-widest mt-2 border-b-4 border-slate-300"
            >
              NUEVO JUEGO
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
