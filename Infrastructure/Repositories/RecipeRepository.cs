using Application.Recipe;
using Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Infrastructure.Repositories
{
    public class RecipeRepository : Repository<Recipe>, IRecipeRepository
    {
        public RecipeRepository( RecipesApiDbContext dbContext )
            : base( dbContext )
        { }
        public List<Recipe> GetAll()
        {
            return Entities
                .Include( r => r.Steps )
                .ToList();
        }

        public Recipe GetById(int id)
        {
            return Entities
                .Include( r => r.Steps )
                .FirstOrDefault( r  => r.Id == id  );
        }
    }
}
