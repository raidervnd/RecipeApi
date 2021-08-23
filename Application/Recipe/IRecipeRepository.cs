using System.Collections.Generic;
using System.Linq;

namespace Application.Recipe
{
    public interface IRecipeRepository
    {
        public List<Recipe> GetAll();
        public Recipe GetById(int id);
        public void AddRecipe(Recipe recipe);
        public IQueryable<Recipe> GetDetachedQuery();
    }
}
