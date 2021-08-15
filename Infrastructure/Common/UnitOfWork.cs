using Application.Abstraction;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Common
{
    public class UnitOfWork<T> : IUnitOfWork
         where T : DbContext
    {
        protected readonly T DbContext;
        public UnitOfWork( T dbContext )
        {
            DbContext = dbContext;
        }

        public void Commit()
        {
            DbContext.SaveChanges();
        }
    }
}
