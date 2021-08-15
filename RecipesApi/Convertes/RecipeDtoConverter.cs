using Application.Recipe;
using RecipesApi.Dto;
using System.Linq;

namespace RecipesApi.Convertes
{
    public class RecipeDtoConverter : IRecipeDtoConverter
    {
        public Recipe ConvertFromDto(RecipeDto recipeDto)
        {
            return recipeDto != null
                ? new Recipe
                {
                    Id = recipeDto.Id,
                    CookingTimeInMinutes = recipeDto.CookingTime,
                    Description = recipeDto.Description,
                    Name = recipeDto.Name,
                    Persons = recipeDto.Persons,
                    Photo = recipeDto.Photo,
                    Steps = recipeDto.Steps.Select(ConvertStepFromDto).ToList()
                }
                : null;
        }
        public RecipeDto ConvertToDto(Recipe recipe)
        {
            return recipe != null
                 ? new RecipeDto
                 {
                     Id = recipe.Id,
                     CookingTime = recipe.CookingTimeInMinutes,
                     Description = recipe.Description,
                     Name = recipe.Name,
                     Persons = recipe.Persons,
                     Photo = recipe.Photo,
                     Steps = recipe.Steps.Select( ConvertStepToDto ).ToList()
                 }
                 : null;
        }

        private Step ConvertStepFromDto(StepDto stepDto)
        {
            return stepDto != null
                ? new Step
                {
                    Id = stepDto.Id,
                    Description = stepDto.Description,
                    Num = stepDto.Num,
                    RecipeId = stepDto.RecipeId
                }
                : null;
        }

        private StepDto ConvertStepToDto( Step step )
        {
            return step != null
                ? new StepDto
                {
                    Id = step.Id,
                    Description = step.Description,
                    Num = step.Num,
                    RecipeId = step.RecipeId
                }
                : null;
        }
    }
}
