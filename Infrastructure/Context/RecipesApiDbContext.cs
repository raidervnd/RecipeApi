using Infrastructure.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Context
{
    public class RecipesApiDbContext : DbContext
    {
        public RecipesApiDbContext(DbContextOptions<RecipesApiDbContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new RecipeConfiguration());
            builder.ApplyConfiguration(new FileConfiguration());
        }
    }
}
