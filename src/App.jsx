import { useContext, useState } from 'react';
import { RecipeContext } from './context/RecipeContext';
import RecipeCard from './components/RecipeCard';
import RecipeDrawer from './components/RecipeDrawer';
import RecipeForm from './components/RecipeForm';

export default function App() {
  const { recipes, setSearchTerm } = useContext(RecipeContext);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 pb-20">
      <div className="max-w-7xl mx-auto px-6 pt-16">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div className="space-y-2">
            <h1 className="text-6xl font-black tracking-tighter text-slate-900">
              Cook<span className="text-orange-500">Book.</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-xs">Your Local Recipe Vault</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <div className="relative w-full sm:w-80 group">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl group-focus-within:grayscale-0 grayscale transition-all">🔍</span>
              <input 
                type="text" 
                placeholder="Search recipes..." 
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-slate-100 rounded-2xl shadow-sm focus:border-orange-400 outline-none transition-all font-bold"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <button 
              onClick={() => setIsAdding(true)}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-orange-500 transition-all shadow-xl active:scale-95"
            >
              + Add Recipe
            </button>
          </div>
        </div>

        {isAdding && (
          <div className="mb-12 animate-in fade-in zoom-in-95 duration-300">
            <RecipeForm onComplete={() => setIsAdding(false)} />
          </div>
        )}

        {recipes.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 bg-slate-50 rounded-[3rem] border-2 border-dashed border-slate-200 text-center">
            <span className="text-7xl mb-6">🥘</span>
            <h2 className="text-2xl font-black text-slate-800">Your kitchen is empty!</h2>
            <p className="text-slate-400 mt-2 font-medium">Add a recipe to start your collection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {recipes.map(recipe => (
              <RecipeCard 
                key={recipe.id} 
                recipe={recipe} 
                onSelect={setSelectedRecipe} 
              />
            ))}
          </div>
        )}
      </div>

      <RecipeDrawer 
        recipe={selectedRecipe} 
        isOpen={!!selectedRecipe} 
        onClose={() => setSelectedRecipe(null)} 
      />
    </div>
  );
}