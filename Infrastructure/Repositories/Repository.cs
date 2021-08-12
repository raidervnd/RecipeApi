using Application.Abstraction;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbContext _dbContext;

        protected DbSet<T> Entities => _dbContext.Set<T>();


        public void Add(T entity)
        {
            throw new System.NotImplementedException();
        }

        public void AddRange(List<T> entities)
        {
            throw new System.NotImplementedException();
        }

        public void Remove(T entity)
        {
            throw new System.NotImplementedException();
        }
    }
}
