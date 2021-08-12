using System.Collections.Generic;

namespace Application.Abstraction
{
    public interface IRepository<T> where T : class
    {
        void Add(T entity);
        void AddRange(List<T> entities);
        void Remove(T entity);
    }
}
