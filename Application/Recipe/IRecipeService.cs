﻿using System.Collections.Generic;

namespace Application.Recipe
{
    public interface IRecipeService
    {
        List<Recipe> GetAll();
        Recipe GetById(int id);
        void AddRecipe(Recipe recipe);
        IReadOnlyList<Recipe> FindRecipes(string searchText);
        void DeleteRecipe(int id);
        //void UpdateRecipe(int id, Recipe recipe);
    }
}
