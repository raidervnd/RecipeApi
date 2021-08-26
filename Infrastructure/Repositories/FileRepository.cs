using Application.File;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infrastructure.Context;

namespace Infrastructure.Repositories
{
    public class FileRepository: Repository<File>, IFileRepository
    {
        public FileRepository(RecipesApiDbContext dbContext)
            : base(dbContext)
        { }
    }
}
