export default function RecipeDrawer({ recipe, isOpen, onClose }) {
  if (!recipe) return null;

  return (
    <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      <div 
        className={`absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose} 
      />
      
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <header className="p-6 border-b flex justify-between items-center">
            <h2 className="text-2xl font-black text-slate-900">Recipe Details</h2>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-900 text-xl font-bold">✕</button>
          </header>
          
          <div className="flex-1 overflow-y-auto p-8">
            <img 
              src={recipe.image} 
              alt={recipe.name} 
              className="w-full h-64 object-cover rounded-3xl shadow-xl mb-8" 
            />
            <div className="space-y-6">
              <div>
                <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">Recipe Name</span>
                <h3 className="text-3xl font-black text-slate-900 mt-1">{recipe.name}</h3>
              </div>
              
              <div>
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">Description</span>
                <p className="text-slate-600 mt-2 leading-relaxed text-lg italic">
                  {recipe.description || "A delicious home-cooked favorite!"}
                </p>
              </div>

              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full font-bold text-sm ${recipe.isFavorite ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-500'}`}>
                {recipe.isFavorite ? '❤️ In Favorites' : '🍽️ Standard Menu'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}