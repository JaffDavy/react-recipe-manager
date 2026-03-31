import { createContext, useState, useEffect } from 'react';

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState(() => {
    const saved = localStorage.getItem('my_recipes');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('my_recipes', JSON.stringify(recipes));
  }, [recipes]);

  const addRecipe = (recipe) => {
    const newRecipe = { 
      ...recipe, 
      id: Date.now(), 
      isFavorite: false,
      description: recipe.description || '' 
    };
    setRecipes([...recipes, newRecipe]);
  };

  const updateRecipe = (id, updatedData) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, ...updatedData } : r));
  };

  const deleteRecipe = (id) => {
    setRecipes(recipes.filter(r => r.id !== id));
  };

  const toggleFavorite = (id) => {
    setRecipes(recipes.map(r => r.id === id ? { ...r, isFavorite: !r.isFavorite } : r));
  };

  const filteredRecipes = recipes.filter(r => 
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <RecipeContext.Provider value={{ 
      recipes: filteredRecipes, 
      addRecipe, 
      updateRecipe, 
      deleteRecipe, 
      toggleFavorite, 
      setSearchTerm 
    }}>
      {children}
    </RecipeContext.Provider>
  );
};