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

        [HttpGet("recipe/{id}")]
        public RecipeDto GetRecipeById(int id)
        {
            Recipe recipe = _recipeService.GetById(id);
            return _recipeDtoConverter.ConvertToDto(recipe);
        }

        [HttpPost]
        public void AddRecipe(RecipeDto recipeDto)
        {
            Recipe recipe = (_recipeDtoConverter.ConvertFromDto(recipeDto));
            _recipeService.AddRecipe(recipe);
            _unitOfWork.Commit();
        }

        //[HttpPut("{id}")]
        //public void Put(int id, RecipeDto recipeDto)
        //{
        //    Recipe recipe = (_recipeDtoConverter.ConvertFromDto(recipeDto));
        //    _recipeService.UpdateRecipe(recipe);
        //    _unitOfWork.Commit();
        //}

        [HttpDelete("{id}")]
        public void DeleteRecipe(int id)
        {
            _recipeService.DeleteRecipe(id);
            _unitOfWork.Commit();
        }

    }
}
