
import React, { useState } from 'react';
import { Category, GameSettings } from '../types';
import { soundService } from '../services/soundService';

interface CategorySelectionViewProps {
  onStart: (settings: GameSettings) => void;
  onBack: () => void;
}

const CategorySelectionView: React.FC<CategorySelectionViewProps> = ({ onStart, onBack }) => {
  const [duration, setDuration] = useState(60);
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([
    Category.ANIMALS,
    Category.COUNTRIES,
    Category.BRANDS,
    Category.MIMICRY
  ]);

  const toggleCategory = (category: Category) => {
    soundService.playClick();
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const selectAll = () => {
    soundService.playPop();
    setSelectedCategories(Object.values(Category));
  };
  
  const deselectAll = () => {
    soundService.playClick();
    setSelectedCategories([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedCategories.length === 0) {
      alert("Por favor selecciona al menos una categoría");
      return;
    }
    soundService.playPop();
    onStart({
      roundDuration: duration,
      categories: selectedCategories
    });
  };

  const allCategories = Object.values(Category);

  const icons: Record<string, string> = {
    [Category.ANIMALS]: '🦁',
    [Category.COUNTRIES]: '🌎',
    [Category.BRANDS]: '🏷️',
    [Category.MIMICRY]: '🎭',
    [Category.GEOGRAPHY]: '🏔️',
    [Category.ANATOMY]: '🫀',
    [Category.MUSIC]: '🎸',
    [Category.ART]: '🎨',
    [Category.SPORTS]: '⚽',
    [Category.FOOD]: '🍕',
    [Category.CHARACTERS]: '🦸',
    [Category.FAMOUS_PEOPLE]: '👤',
    [Category.PROFESSIONS]: '👷',
    [Category.PERU_PRESIDENTS]: '🇵🇪',
    [Category.BOOKS]: '📚',
    [Category.POKEMON]: '⚡'
  };

  const handleDurationChange = (val: number) => {
    soundService.playClick();
    setDuration(val);
  };

  return (
    <div className="p-5 sm:p-8 flex-1 flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-4 shrink-0">
        <div className="flex items-center gap-3">
          <button 
            type="button"
            onClick={() => { soundService.playClick(); onBack(); }}
            className="bg-slate-700/50 hover:bg-slate-700 w-9 h-9 rounded-full flex items-center justify-center border border-slate-600 transition-all active:scale-90"
          >
            <span className="text-lg">←</span>
          </button>
          <div>
            <h2 className="text-2xl font-black text-white uppercase tracking-tight leading-tight">Categorías</h2>
            <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">Elige tus retos</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={selectAll} className="text-[9px] font-black uppercase text-indigo-400 hover:text-indigo-300">Todas</button>
          <button type="button" onClick={deselectAll} className="text-[9px] font-black uppercase text-slate-500 hover:text-slate-400">Ninguna</button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0 overflow-hidden">
        <div className="flex-1 overflow-y-auto pr-2 mb-4 custom-scrollbar">
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-2 pb-2">
            {allCategories.map((cat) => {
              const isSelected = selectedCategories.includes(cat);
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => toggleCategory(cat)}
                  className={`relative overflow-hidden py-3 px-3 rounded-xl font-bold text-sm transition-all border-2 flex items-center gap-2 ${
                    isSelected ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg' : 'bg-slate-900/30 border-slate-800 text-slate-500'
                  }`}
                >
                  <span className={`text-xl transition-transform ${isSelected ? 'scale-110' : 'grayscale opacity-30'}`}>{icons[cat] || '❓'}</span>
                  <span className="flex-1 text-left truncate text-[11px] sm:text-xs font-black uppercase tracking-tight">{cat}</span>
                  {isSelected && (
                    <div className="bg-indigo-500 rounded-full w-4 h-4 flex items-center justify-center shrink-0">
                      <span className="text-slate-950 text-[8px] font-black">✓</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="shrink-0 space-y-4 pt-2 border-t border-slate-700/50">
          <div className="space-y-2 bg-slate-900/40 p-4 rounded-2xl border border-slate-700/50">
            <label className="block text-[10px] font-black text-slate-500 uppercase ml-1 tracking-wider">Tiempo de ronda</label>
            <div className="grid grid-cols-4 gap-2">
              {[30, 60, 90, 120].map(val => (
                <button
                  key={val}
                  type="button"
                  onClick={() => handleDurationChange(val)}
                  className={`py-2 rounded-xl font-black text-xs transition-all border ${
                    duration === val ? 'bg-indigo-500 text-slate-950 border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.3)]' : 'bg-slate-800 text-slate-400 border-slate-700'
                  }`}
                >
                  {val}"
                </button>
              ))}
            </div>
          </div>
          <button type="submit" disabled={selectedCategories.length === 0} className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-xl font-black text-lg shadow-xl transition-all active:scale-[0.98] uppercase tracking-widest border-b-4 border-indigo-800">
            ¡A JUGAR! ({selectedCategories.length})
          </button>
        </div>
      </form>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 5px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(15, 23, 42, 0.1); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(99, 102, 241, 0.3); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(99, 102, 241, 0.5); }
      `}</style>
    </div>
  );
};

export default CategorySelectionView;
