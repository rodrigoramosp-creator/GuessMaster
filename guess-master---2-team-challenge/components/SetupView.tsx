
import React, { useState, useEffect, useRef } from 'react';
import { Team } from '../types';
import { soundService } from '../services/soundService';

interface SetupViewProps {
  onNext: (teams: Team[]) => void;
}

const TEAM_COLORS = [
  'indigo', 'rose', 'emerald', 'amber', 'purple', 'orange', 'cyan', 'pink'
];

const SetupView: React.FC<SetupViewProps> = ({ onNext }) => {
  const [numTeams, setNumTeams] = useState(2);
  const [teamNames, setTeamNames] = useState<string[]>(['Equipo 1', 'Equipo 2', '', '', '', '', '', '']);
  const listRef = useRef<HTMLDivElement>(null);

  const handleNumTeamsChange = (delta: number) => {
    soundService.playClick();
    const newVal = Math.min(8, Math.max(2, numTeams + delta));
    if (newVal !== numTeams) {
      setNumTeams(newVal);
      setTeamNames(prev => {
        const next = [...prev];
        for (let i = 0; i < newVal; i++) {
          if (!next[i]) next[i] = `Equipo ${i + 1}`;
        }
        return next;
      });
      if (delta > 0) {
        setTimeout(() => {
          if (listRef.current) {
            listRef.current.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
          }
        }, 50);
      }
    }
  };

  const handleNameChange = (index: number, value: string) => {
    setTeamNames(prev => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playPop();
    const finalTeams: Team[] = [];
    for (let i = 0; i < numTeams; i++) {
      finalTeams.push({
        name: teamNames[i].trim() || `Equipo ${i + 1}`,
        score: 0,
        color: TEAM_COLORS[i % TEAM_COLORS.length]
      });
    }
    onNext(finalTeams);
  };

  return (
    <div className="p-6 sm:p-8 flex-1 flex flex-col min-h-0">
      <div className="text-center mb-6 shrink-0">
        <h1 className="text-4xl font-extrabold tracking-tighter italic">GUESS <span className="text-indigo-400">MASTER</span></h1>
        <p className="text-slate-400 text-[10px] uppercase font-black tracking-[0.2em] opacity-60">Configuración de Equipos</p>
      </div>

      <div className="bg-slate-900/60 border border-slate-700/50 rounded-3xl p-5 mb-6 text-center shrink-0 shadow-inner">
        <label className="block text-[10px] font-black text-slate-500 uppercase mb-3 tracking-widest">¿Cuántos equipos compiten?</label>
        <div className="flex items-center justify-center gap-6">
          <button 
            type="button"
            onClick={() => handleNumTeamsChange(-1)}
            disabled={numTeams <= 2}
            className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-black hover:bg-slate-700 transition-all active:scale-90 disabled:opacity-20 shadow-lg"
          >
            -
          </button>
          <div className="flex flex-col">
            <span className="text-5xl font-black text-white tabular-nums leading-none">{numTeams}</span>
            <span className="text-[10px] font-bold text-indigo-400 uppercase mt-1">Equipos</span>
          </div>
          <button 
            type="button"
            onClick={() => handleNumTeamsChange(1)}
            disabled={numTeams >= 8}
            className="w-10 h-10 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-xl font-black hover:bg-slate-700 transition-all active:scale-90 disabled:opacity-20 shadow-lg"
          >
            +
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0">
        <div ref={listRef} className="flex-1 overflow-y-auto pr-2 mb-6 scroll-smooth space-y-3 custom-scrollbar" style={{ scrollbarWidth: 'thin', scrollbarColor: '#475569 transparent' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Array.from({ length: numTeams }).map((_, i) => {
              const color = TEAM_COLORS[i % TEAM_COLORS.length];
              return (
                <div key={i} className={`group relative bg-slate-900/40 border-2 border-slate-800 rounded-2xl p-3 transition-all duration-300 hover:border-${color}-500/50 focus-within:border-${color}-500 focus-within:bg-slate-900/80 animate-in slide-in-from-bottom-2 fade-in`}>
                  <div className={`absolute top-0 left-0 bottom-0 w-1.5 rounded-l-xl bg-${color}-500 shadow-[2px_0_10px_rgba(0,0,0,0.2)]`}></div>
                  <div className="pl-3 flex flex-col space-y-1">
                    <label className={`text-[9px] font-black uppercase text-${color}-400 opacity-70`}>Equipo {i + 1}</label>
                    <input
                      type="text"
                      value={teamNames[i]}
                      onChange={(e) => handleNameChange(i, e.target.value)}
                      className="w-full bg-transparent border-none p-0 focus:ring-0 text-white font-bold text-base placeholder-slate-600"
                      placeholder={`Nombre del Equipo ${i + 1}`}
                      required
                    />
                  </div>
                  <div className={`absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-${color}-500/10 flex items-center justify-center border border-${color}-500/20`}>
                    <span className={`text-[10px] font-black text-${color}-400`}>#{i+1}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button type="submit" className="w-full shrink-0 bg-white text-indigo-950 hover:bg-indigo-50 py-5 rounded-2xl font-black text-xl shadow-2xl transition-all active:scale-[0.98] uppercase tracking-widest border-b-4 border-slate-300">
          CONFIGURAR PARTIDA
        </button>
      </form>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #334155; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #475569; }
      `}</style>
    </div>
  );
};

export default SetupView;
