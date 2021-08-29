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

        public void AddRecipe(Recipe recipe)
        {
            Entities.Add(recipe);
        }

        public IQueryable<Recipe> GetDetachedQuery()
        {
            return Entities
                .Include(r => r.Steps)
                .Include(r => r.Tags)
                .Include(r => r.Ingredients)
                .AsNoTracking();
        }

        public List<Recipe> GetAll()
        {
            return Entities
                .Include( r => r.Steps )
                .Include( r => r.Tags)
                .Include( r => r.Ingredients)
                .ToList();
        }

        public Recipe GetById(int id)
        {
            return Entities
                .Include( r => r.Steps )
                .Include( r => r.Tags)
                .Include( r => r.Ingredients)
                .FirstOrDefault( r  => r.Id == id );
        }

        public void DeleteRecipe(Recipe recipe)
        {
            Entities.Remove(recipe);
        }

        //public void UpdateRecipe(Recipe recipe)
        //{
        //    Entities.Update(recipe);
        //}
    }
}
