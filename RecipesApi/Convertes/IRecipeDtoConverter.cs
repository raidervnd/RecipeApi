using Application.Recipe;
using RecipesApi.Dto;

namespace RecipesApi.Convertes
{
    public interface IRecipeDtoConverter
    {
        RecipeDto ConvertToDto(Recipe recipe);

        Recipe ConvertFromDto(RecipeDto recipeDto);
    }
}
