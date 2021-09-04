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
            List<Recipe> recipes = _recipeRepository.GetDetachedQuery()
                .Where(r => EF.Functions.Like(r.Name, "%" + searchText + "%") || r.Tags.Any(r => EF.Functions.Like(r.Title, searchText))).ToList();
            return recipes;
        }

        public void DeleteRecipe(int id)
        {
            Recipe recipe = _recipeRepository.GetById(id);
            _recipeRepository.DeleteRecipe(recipe);

        }

        public void UpdateRecipe(Recipe recipe)
        {
            _recipeRepository.UpdateRecipe(recipe);
        }
    }
}
