using System.Collections.Generic;

namespace Application.Recipe
{
    public interface IRecipeService
    {
        List<Recipe> GetAll();
        Recipe GetById(int id);
        void AddRecipe(Recipe recipe);
        //Recipe AddRecipe(Recipe recipeDto);

        //void Create()
    }
}
