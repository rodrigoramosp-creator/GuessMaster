
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
        <div className={`text-9xl font-black text-${teamColor}-400 animate-pulse`}>
          {countdown}
        </div>
        <div className="mt-8 space-y-2">
          <p className="text-2xl font-black tracking-widest text-slate-500 uppercase">¡PREPÁRATE!</p>
          <p className="text-white font-bold uppercase text-4xl">{categoryName}</p>
        </div>
      </div>
    );
  }

  const progress = (timeLeft / duration) * 100;
  const currentWord = wordList[currentIndex];

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex flex-col overflow-hidden force-landscape">
      <div className="flex items-center justify-between px-10 py-4 bg-black/20 backdrop-blur-md relative z-20">
        <div className="flex items-center gap-4 min-w-0">
          <div className={`w-5 h-5 rounded-full bg-${teamColor}-500 shadow-[0_0_15px_rgba(255,255,255,0.4)] shrink-0`}></div>
          <span className="text-white font-black text-2xl uppercase tracking-wider truncate">{categoryName}</span>
        </div>
        <div className="text-4xl font-mono font-black text-white bg-black/40 px-6 py-1 rounded-full border border-white/10 shadow-2xl tabular-nums">
          {Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}
        </div>
      </div>

      <div className="w-full h-2 bg-white/5 relative z-20">
        <div className="h-full bg-white transition-all duration-1000 ease-linear shadow-[0_0_15px_white]" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex z-30">
          <div onClick={() => handleAction(true)} className="flex-1 cursor-pointer active:bg-white/5" />
          <div onClick={() => handleAction(false)} className="flex-1 cursor-pointer active:bg-white/5" />
        </div>

        <div className="p-12 z-10 pointer-events-none flex flex-col items-center">
          <h2 className="text-5xl md:text-8xl font-black text-center text-white drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)] leading-tight uppercase italic tracking-tighter">
            {currentWord.text}
          </h2>
          {currentWord.subtext && (
            <p className="text-xl md:text-3xl font-bold text-white/60 mt-4 uppercase tracking-widest">
              {currentWord.subtext}
            </p>
          )}
        </div>

        {lastFeedback && (
          <div className={`absolute inset-0 z-[100] flex flex-col items-center justify-center transition-all animate-in fade-in zoom-in duration-100 ${
            lastFeedback === 'correct' ? 'bg-emerald-500' : 'bg-rose-500'
          }`}>
             <div className="scale-110 flex flex-col items-center">
                <div className="w-32 h-32 rounded-full bg-white/20 border-8 border-white/40 flex items-center justify-center mb-6 shadow-2xl animate-bounce-subtle">
                   <span className="text-7xl text-white font-black">{lastFeedback === 'correct' ? '✓' : '✕'}</span>
                </div>
                <span className="text-white text-7xl md:text-9xl font-black uppercase tracking-tighter drop-shadow-2xl">
                  {lastFeedback === 'correct' ? '¡SÍ!' : 'PASO'}
                </span>
             </div>
          </div>
        )}

        <div className="absolute bottom-8 left-12 flex flex-col items-center text-white/20 font-black text-xs uppercase tracking-[0.5em] z-20 pointer-events-none">
          <span className="text-4xl mb-1">←</span>CORRECTO
        </div>
        <div className="absolute bottom-8 right-12 flex flex-col items-center text-white/20 font-black text-xs uppercase tracking-[0.5em] z-20 pointer-events-none">
          <span className="text-4xl mb-1">→</span>SALTAR
        </div>
      </div>
    </div>
  );
};

export default GameView;
