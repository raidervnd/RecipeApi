using System.Collections.Generic;

namespace Application.Recipe
{
    public interface IRecipeRepository
    {
        public List<Recipe> GetAll();
        public Recipe GetById(int id);
        public void AddRecipe(Recipe recipe);
    }
}
