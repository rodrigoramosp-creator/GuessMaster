
import React, { useState } from 'react';
import { RoundResult, Team } from '../types';

interface ResultsViewProps {
  results: RoundResult[];
  teamName: string;
  teamColor: string;
  teams: Team[];
  onNext: () => void;
}

const ResultsView: React.FC<ResultsViewProps> = ({ results, teamName, teamColor, teams, onNext }) => {
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const score = results.filter(r => r.correct).length;

  return (
    <div className="flex-1 flex flex-col p-5 sm:p-6 min-h-0 relative">
      <div className="flex justify-between items-start pt-1 mb-4 shrink-0">
        <div className="flex-1 min-w-0 pr-2">
          <h3 className="text-slate-500 font-bold uppercase tracking-widest text-[9px] mb-0.5">Resumen</h3>
          <h2 className={`text-2xl sm:text-3xl font-black text-${teamColor}-400 truncate leading-tight`}>{teamName}</h2>
        </div>
        <button 
          onClick={() => setShowLeaderboard(true)}
          className="bg-slate-700/50 hover:bg-slate-700 p-2.5 rounded-xl border border-slate-600 transition-colors shadow-lg active:scale-95 flex items-center gap-2 group shrink-0"
        >
          <span className="hidden xs:inline text-[10px] font-black text-slate-300 uppercase">Posiciones</span>
          <span className="text-lg group-hover:scale-110 transition-transform">🏆</span>
        </button>
      </div>

      <div className="text-center mb-4 shrink-0">
        <div className="flex items-center justify-center">
            <span className="text-6xl sm:text-8xl font-black text-white leading-none tabular-nums">{score}</span>
            <div className="flex flex-col items-start ml-2 text-left">
               <span className="text-slate-500 font-black text-sm sm:text-lg leading-tight uppercase">Puntos</span>
               <span className="text-slate-600 font-bold text-[9px] uppercase tracking-tighter">Conseguidos</span>
            </div>
        </div>
      </div>

      <div className="bg-slate-900/50 rounded-[1.5rem] border border-slate-700/50 p-4 flex-1 flex flex-col min-h-0 overflow-hidden shadow-inner">
        <p className="text-slate-500 text-[9px] font-black uppercase tracking-widest mb-3 border-b border-slate-700/50 pb-2 shrink-0">Resultados del turno:</p>
        
        {results.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-slate-500 space-y-1 opacity-50">
            <span className="text-3xl">🤷</span>
            <p className="text-[10px] font-bold uppercase italic">Sin intentos</p>
          </div>
        ) : (
          <div className="space-y-1.5 overflow-y-auto pr-1 custom-scrollbar">
            {results.map((res, i) => (
              <div 
                key={i} 
                className={`flex items-center justify-between p-3 rounded-xl transition-all border ${
                  res.correct 
                    ? 'bg-emerald-500/5 border-emerald-500/10' 
                    : 'bg-rose-500/5 border-rose-500/10'
                }`}
              >
                <div className="flex flex-col min-w-0 pr-2">
                   <span className={`font-bold text-sm sm:text-base truncate ${res.correct ? 'text-emerald-400' : 'text-rose-400'}`}>
                     {res.word.text}
                   </span>
                   {res.word.subtext && (
                     <span className="text-[10px] opacity-60 text-slate-400 truncate uppercase tracking-tighter">
                       {res.word.subtext}
                     </span>
                   )}
                </div>
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] shrink-0 ${
                    res.correct ? 'bg-emerald-500 text-slate-900' : 'bg-rose-500 text-white'
                }`}>
                  {res.correct ? '✓' : '✕'}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 shrink-0">
        <button
            onClick={onNext}
            className={`w-full bg-${teamColor}-600 hover:bg-${teamColor}-500 text-white py-4 rounded-xl font-black text-lg shadow-xl transition-all active:scale-[0.98] uppercase tracking-wider border-b-4 border-${teamColor}-800`}
        >
            SIGUIENTE TURNO
        </button>
      </div>

      {showLeaderboard && (
        <div className="absolute inset-0 z-50 bg-slate-950/98 backdrop-blur-xl p-6 flex flex-col rounded-[2rem] animate-in fade-in zoom-in duration-200">
          <div className="flex justify-between items-center mb-6 shrink-0">
            <h2 className="text-xl font-black uppercase tracking-tight text-white/90">Clasificación</h2>
            <button 
              onClick={() => setShowLeaderboard(false)}
              className="bg-white/5 hover:bg-white/10 w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto pr-1 custom-scrollbar">
            {[...teams].sort((a, b) => b.score - a.score).map((team, idx) => (
              <div key={team.name} className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                idx === 0 ? `bg-${team.color}-600/20 border-${team.color}-500 shadow-lg shadow-${team.color}-500/10` : 'bg-slate-800/50 border-slate-700'
              }`}>
                <div className="flex items-center gap-3 min-w-0">
                  <span className="text-lg font-black opacity-30 tabular-nums">#{idx + 1}</span>
                  <div className="text-left min-w-0">
                    <p className="font-bold text-sm truncate leading-tight text-white">{team.name}</p>
                    <p className={`text-[8px] font-black uppercase text-${team.color}-400 opacity-60`}>
                      {team.color}
                    </p>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-2xl font-black tabular-nums text-white">{team.score}</span>
                  <span className="block text-[7px] font-bold text-slate-500 uppercase">Puntos</span>
                </div>
              </div>
            ))}
          </div>

          <button 
            onClick={() => setShowLeaderboard(false)}
            className="w-full bg-white text-slate-900 font-black py-4 rounded-xl mt-6 active:scale-95 transition-all shadow-xl shrink-0 text-sm"
          >
            VOLVER
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultsView;
