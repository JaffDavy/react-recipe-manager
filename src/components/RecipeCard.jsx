import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export default function RecipeCard({ recipe, onSelect }) {
  const { toggleFavorite, deleteRecipe } = useContext(RecipeContext);

  return (
    <div className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative aspect-square overflow-hidden bg-slate-50">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="h-full w-full object-cover cursor-pointer group-hover:scale-105 transition-transform duration-500"
          onClick={() => onSelect(recipe)}
        />
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(recipe.id);
          }}
          className={`absolute top-2 right-2 p-1.5 rounded-full backdrop-blur-md transition-all active:scale-125 ${
            recipe.isFavorite ? 'bg-orange-500 text-white' : 'bg-white/80 text-slate-400'
          }`}
        >
          {recipe.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="p-3 sm:p-4">
        <h3 
          className="text-sm font-bold text-slate-800 truncate mb-2 cursor-pointer leading-tight"
          onClick={() => onSelect(recipe)}
        >
          {recipe.name}
        </h3>
        <div className="flex items-center justify-between gap-2">
          <button 
            onClick={() => onSelect(recipe)}
            className="text-[10px] font-black uppercase tracking-tighter text-orange-600 truncate"
          >
            Details
          </button>
          <button 
            onClick={() => deleteRecipe(recipe.id)}
            className="text-[10px] font-bold text-slate-300 hover:text-red-500 transition-colors shrink-0"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
} 