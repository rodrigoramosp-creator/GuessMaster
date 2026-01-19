import React, { useState, useEffect, useCallback, useRef } from 'react';
import { RoundResult, WordItem } from '../types';
import { soundService } from '../services/soundService';

interface GameViewProps {
  wordList: WordItem[];
  duration: number;
  onEnd: (results: RoundResult[]) => void;
  teamColor: string;
  categoryName: string;
}

const GameView: React.FC<GameViewProps> = ({ wordList, duration, onEnd, teamColor, categoryName }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [results, setResults] = useState<RoundResult[]>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [lastFeedback, setLastFeedback] = useState<'correct' | 'skip' | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const resultsRef = useRef<RoundResult[]>([]);
  resultsRef.current = results;

  useEffect(() => {
    if (countdown > 0) {
      soundService.playTick();
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      soundService.playStart();
      setHasStarted(true);
    }
  }, [countdown]);

  useEffect(() => {
    if (!hasStarted) return;
    
    const timerInterval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerInterval);
          soundService.playEnd();
          return 0;
        }
        if (prev <= 4) {
          soundService.playTick();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [hasStarted]);

  useEffect(() => {
    if (hasStarted && timeLeft === 0) {
      onEnd(resultsRef.current);
    }
  }, [timeLeft, hasStarted, onEnd]);

  const handleAction = useCallback((correct: boolean) => {
    if (!hasStarted || isProcessing || timeLeft <= 0) return;
    
    if (correct) {
      soundService.playCorrect();
    } else {
      soundService.playSkip();
    }

    const word = wordList[currentIndex];
    setResults(prev => [...prev, { word, correct }]);
    setLastFeedback(correct ? 'correct' : 'skip');
    setIsProcessing(true);

    setTimeout(() => {
      setLastFeedback(null);
      setIsProcessing(false);
      
      if (currentIndex < wordList.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 400);
  }, [currentIndex, hasStarted, isProcessing, wordList, timeLeft]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') {
        handleAction(true);
      } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 's') {
        handleAction(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleAction]);

  if (!hasStarted) {
    return (
      <div className="fixed inset-0 bg-slate-900 z-[100] flex flex-col items-center justify-center p-8 text-center force-landscape">
        {/* CAMBIO: Reducido de text-9xl a text-7xl md:text-8xl */}
        <div className={`text-7xl md:text-8xl font-black text-${teamColor}-400 animate-pulse`}>
          {countdown}
        </div>
        <div className="mt-8 space-y-2">
          {/* CAMBIO: Ajuste leve de tamaño */}
          <p className="text-xl font-black tracking-widest text-slate-500 uppercase">¡PREPÁRATE!</p>
          <p className="text-white font-bold uppercase text-3xl md:text-4xl">{categoryName}</p>
        </div>
      </div>
    );
  }

  const progress = (timeLeft / duration) * 100;
  const currentWord = wordList[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col overflow-hidden force-landscape">
      {/* Barra superior compacta */}
      <div className="flex items-center justify-between px-6 py-2 bg-black/40 backdrop-blur-md relative z-20 border-b border-white/5">
        <div className="flex items-center gap-3 min-w-0">
          <div className={`w-3 h-3 rounded-full bg-${teamColor}-500 shadow-[0_0_8px_rgba(255,255,255,0.4)] shrink-0`}></div>
          <span className="text-white font-black text-sm uppercase tracking-widest truncate opacity-80">{categoryName}</span>
        </div>
        <div className="text-xl font-mono font-black text-white px-4 py-0.5 rounded-full border border-white/10 bg-black/20 tabular-nums">
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
        </div>
      </div>

      <div className="w-full h-1 bg-white/5 relative z-20">
        <div className="h-full bg-white transition-all duration-1000 ease-linear shadow-[0_0_10px_white]" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex z-30">
          <div onClick={() => handleAction(true)} className="flex-1 cursor-pointer active:bg-white/5" />
          <div onClick={() => handleAction(false)} className="flex-1 cursor-pointer active:bg-white/5" />
        </div>

        <div className="p-8 z-10 pointer-events-none flex flex-col items-center max-w-4xl w-full">
          {/* CAMBIO PRINCIPAL: Reducido de text-6xl/9xl a text-5xl/7xl para evitar desbordamiento */}
          <h2 className="text-5xl md:text-7xl font-black text-center text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] leading-tight uppercase italic tracking-tighter break-words w-full">
            {currentWord.text}
          </h2>
          {currentWord.subtext && (
            // CAMBIO: Reducido subtexto levemente
            <p className="text-base md:text-xl font-bold text-white/50 mt-4 uppercase tracking-[0.2em]">
              {currentWord.subtext}
            </p>
          )}
        </div>

        {lastFeedback && (
          <div className={`absolute inset-0 z-[100] flex flex-col items-center justify-center transition-all animate-in fade-in zoom-in duration-100 ${
            lastFeedback === 'correct' ? 'bg-emerald-500' : 'bg-rose-500'
          }`}>
              <div className="scale-110 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white/20 border-8 border-white/40 flex items-center justify-center mb-4 shadow-2xl animate-bounce-subtle">
                   <span className="text-6xl text-white font-black">{lastFeedback === 'correct' ? '✓' : '✕'}</span>
                </div>
                {/* CAMBIO: Reducido de text-6xl/8xl a text-5xl/7xl */}
                <span className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter drop-shadow-2xl">
                  {lastFeedback === 'correct' ? '¡SÍ!' : 'PASO'}
                </span>
              </div>
          </div>
        )}

        <div className="absolute bottom-6 left-8 flex flex-col items-center text-white/10 font-black text-[10px] uppercase tracking-[0.5em] z-20 pointer-events-none">
          <span className="text-2xl mb-0.5">←</span>CORRECTO
        </div>
        <div className="absolute bottom-6 right-8 flex flex-col items-center text-white/10 font-black text-[10px] uppercase tracking-[0.5em] z-20 pointer-events-none">
          <span className="text-2xl mb-0.5">→</span>SALTAR
        </div>
      </div>
    </div>
  );
};

export default GameView;

