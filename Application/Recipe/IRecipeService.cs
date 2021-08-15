using System.Collections.Generic;

namespace Application.Recipe
{
    public interface IRecipeService
    {
        List<Recipe> GetAll();
        Recipe GetById(int id);

        //void Create()
    }
}
