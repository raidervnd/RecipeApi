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
                    CookingTimeInMinutes = recipeDto.CookingTimeInMinutes,
                    Description = recipeDto.Description,
                    Name = recipeDto.Name,
                    Persons = recipeDto.Persons,
                    Photo = recipeDto.Photo,
                    Likes = recipeDto.Likes,
                    Saved = recipeDto.Saved,
                    Steps = recipeDto.Steps?.Select(ConvertStepFromDto).ToList(),
                    Tags = recipeDto.Tags?.Select(ConvertTagFromDto).ToList(),
                    Ingredients = recipeDto.Ingredients?.Select(ConvertIngredientFromDto).ToList()
                }
                : null;
        }
        public RecipeDto ConvertToDto(Recipe recipe)
        {
            return recipe != null
                 ? new RecipeDto
                 {
                     Id = recipe.Id,
                     CookingTimeInMinutes = recipe.CookingTimeInMinutes,
                     Description = recipe.Description,
                     Name = recipe.Name,
                     Persons = recipe.Persons,
                     Photo = recipe.Photo,
                     Likes = recipe.Likes,
                     Saved = recipe.Saved,
                     Steps = recipe.Steps?.Select( ConvertStepToDto ).ToList(),
                     Tags = recipe.Tags?.Select( ConvertTagToDto ).ToList(), 
                     Ingredients = recipe.Ingredients?.Select(ConvertIngredientToDto).ToList()
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
        private Tag ConvertTagFromDto(TagDto tagDto)
        {
            return tagDto != null
                ? new Tag
                {
                    Id = tagDto.Id,
                    RecipeId = tagDto.RecipeId,
                    Title = tagDto.Title
                }
                : null;
        }
        private TagDto ConvertTagToDto(Tag tag)
        {
            return tag != null
                ? new TagDto
                {
                    Id = tag.Id,
                    RecipeId = tag.RecipeId,
                    Title = tag.Title
                }
                : null;
        }
        private Ingredient ConvertIngredientFromDto(IngredientDto ingredientDto)
        {
            return ingredientDto != null
                ? new Ingredient
                {
                    Id = ingredientDto.Id,
                    Description = ingredientDto.Description,
                    Title = ingredientDto.Title,
                    RecipeId = ingredientDto.RecipeId
                }
                : null;
        }
        private IngredientDto ConvertIngredientToDto(Ingredient ingredient)
        {
            return ingredient != null
                ? new IngredientDto
                {
                    Id = ingredient.Id,
                    Description = ingredient.Description,
                    Title = ingredient.Title,
                    RecipeId = ingredient.RecipeId
                }
                : null;
        }
    }
}
