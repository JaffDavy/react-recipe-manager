import { useContext } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export default function RecipeCard({ recipe, onSelect }) {
  const { toggleFavorite, deleteRecipe } = useContext(RecipeContext);

  return (
    <div className="group relative bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.name} 
          className="h-full w-full object-cover cursor-pointer group-hover:scale-110 transition-transform duration-700"
          onClick={() => onSelect(recipe)}
        />
        <button 
          onClick={() => toggleFavorite(recipe.id)}
          className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-all active:scale-125 ${
            recipe.isFavorite ? 'bg-orange-500 text-white' : 'bg-white/80 text-slate-400 hover:text-orange-500'
          }`}
        >
          {recipe.isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-black text-slate-800 truncate mb-4">{recipe.name}</h3>
        <div className="flex items-center justify-between">
          <button 
            onClick={() => onSelect(recipe)}
            className="text-sm font-bold text-orange-600 hover:text-orange-700"
          >
            View Details →
          </button>
          <button 
            onClick={() => deleteRecipe(recipe.id)}
            className="text-sm font-medium text-slate-300 hover:text-red-500 transition-colors"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}