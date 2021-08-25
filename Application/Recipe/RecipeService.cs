using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Application.Recipe
{
    public class RecipeService : IRecipeService
    {
        private readonly IRecipeRepository _recipeRepository;

        public RecipeService(IRecipeRepository recipeRepository)
        {
            _recipeRepository = recipeRepository;
        }

        public void AddRecipe(Recipe recipe)
        {
            _recipeRepository.AddRecipe(recipe);
        }

        public List<Recipe> GetAll()
        {
           return _recipeRepository.GetAll();
        }

        public Recipe GetById(int id)
        {
            return _recipeRepository.GetById(id);
        }

        public IReadOnlyList<Recipe> FindRecipes(string searchText)
        {
            return _recipeRepository.GetDetachedQuery().Where(r => EF.Functions.Like(r.Name, "%" + searchText + "%")).ToList();

        }
    }
}
