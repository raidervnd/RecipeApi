using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System.IO;

namespace Infrastructure.Context
{
    public class DesignTimeRepositoryContextFactory : IDesignTimeDbContextFactory<RecipesApiDbContext>
    {
        public RecipesApiDbContext CreateDbContext(string[] args)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json");

            var config = builder.Build();
            var connectionString = config.GetConnectionString("DbConnection");
            var optionsBuilder = new DbContextOptionsBuilder<RecipesApiDbContext>();
            optionsBuilder.UseSqlServer(connectionString, x => x.MigrationsAssembly("SqlServerConnection"));

            return new RecipesApiDbContext(optionsBuilder.Options);
        }
    }
}
