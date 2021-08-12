using Application.Recipe;
using System.Collections.Generic;

namespace Infrastructure.Repositories
{
    public class RecipeRepository : Repository<Recipe>, IRecipeRepository
    {
        public List<Recipe> GetAll()
        {
            throw new System.NotImplementedException();
        }

        public Recipe GetById(int id)
        {
            throw new System.NotImplementedException();
        }
    }
}
