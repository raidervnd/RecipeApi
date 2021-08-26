using Microsoft.AspNetCore.Mvc;
using RecipesApi.Dto;
using Application.Recipe;
using System.Linq;
using RecipesApi.Convertes;
using Application.Abstraction;
using System.Collections.Generic;

namespace RecipesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly IRecipeService _recipeService;
        private readonly IRecipeDtoConverter _recipeDtoConverter;
        private readonly IUnitOfWork _unitOfWork;

        public RecipesController(
            IRecipeService recipeService, 
            IRecipeDtoConverter recipeDtoConverter,
            IUnitOfWork unitOfWork)
        {
            _recipeService = recipeService;
            _recipeDtoConverter = recipeDtoConverter;
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public RecipeDto[] Get()
        {
             return _recipeService.GetAll().Select(_recipeDtoConverter.ConvertToDto).ToArray();
        }

        [HttpGet("{searchText}")]
        public IReadOnlyList<RecipeDto> FindRecipe(string searchText)
        {
            return _recipeService.FindRecipes(searchText).Select(_recipeDtoConverter.ConvertToDto).ToArray();
        }

        [HttpPost]
        public void AddRecipe(RecipeDto recipeDto)
        {
            Recipe recipe = _recipeDtoConverter.ConvertFromDto(recipeDto);
            _recipeService.AddRecipe(recipe);
            _unitOfWork.Commit();
        }
    }
}
