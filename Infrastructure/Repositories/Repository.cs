using Application.Abstraction;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace Infrastructure.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        private readonly DbContext _dbContext;
        protected DbSet<T> Entities => _dbContext.Set<T>();
        public Repository( DbContext dbContext )
        {
            _dbContext = dbContext;
        }
        public void Add(T entity)
        {
            _dbContext.Add(entity);
        }
        public void AddRange(List<T> entities)
        {
            _dbContext.AddRange(entities);
        }
        public void Remove(T entity)
        {
            _dbContext.Remove(entity);
        }
        public void Update(T entity)
        {
            _dbContext.Update(entity);
        }
    }
}
