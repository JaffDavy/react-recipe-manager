import { useState, useContext, useEffect } from 'react';
import { RecipeContext } from '../context/RecipeContext';

export default function RecipeForm({ initialData, onComplete }) {
  const { addRecipe, updateRecipe } = useContext(RecipeContext);
  
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    description: ''
  });

  useEffect(() => {
    if (initialData) setFormData(initialData);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.image) return;

    if (initialData?.id) {
      updateRecipe(initialData.id, formData);
    } else {
      addRecipe(formData);
    }
    
    setFormData({ name: '', image: '', description: '' });
    onComplete();
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white p-8 rounded-[2rem] shadow-2xl border border-slate-100 space-y-6 transition-all duration-300"
    >
      <h2 className="text-2xl font-black text-slate-900 mb-2">
        {initialData ? 'Update Recipe' : 'Add New Recipe'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Recipe Name</label>
          <input 
            type="text"
            placeholder="e.g. Grandma's Pasta"
            className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-orange-400 focus:bg-white outline-none transition-all font-medium"
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Image URL</label>
          <input 
            type="url"
            placeholder="https://unsplash.com/..."
            className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-orange-400 focus:bg-white outline-none transition-all font-medium"
            value={formData.image}
            onChange={e => setFormData({...formData, image: e.target.value})}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Instructions / Description</label>
        <textarea 
          placeholder="Share the secret ingredients..."
          rows="4"
          className="w-full p-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-orange-400 focus:bg-white outline-none transition-all font-medium resize-none"
          value={formData.description}
          onChange={e => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <div className="flex gap-4">
        <button 
          type="submit" 
          className="flex-1 py-4 bg-orange-500 hover:bg-orange-600 text-white font-black rounded-2xl shadow-xl shadow-orange-200 transition-all active:scale-[0.97]"
        >
          {initialData ? 'Save Changes' : 'Create Recipe'}
        </button>
        <button 
          type="button"
          onClick={onComplete}
          className="px-8 py-4 bg-slate-100 text-slate-500 font-bold rounded-2xl hover:bg-slate-200 transition-all"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}