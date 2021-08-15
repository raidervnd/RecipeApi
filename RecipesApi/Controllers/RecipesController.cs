using Microsoft.AspNetCore.Mvc;
using RecipesApi.Dto;
using Application.Recipe;
using System.Linq;
using RecipesApi.Convertes;
using Application.Abstraction;

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

        [HttpGet("{id}")]
        public RecipeDto GetById(int id)
        {
            var recipe = _recipeService.GetById(id);
            return new RecipeDto
            {
                Id = recipe.Id
            };
        }

        // POST api/<RecipesController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
            // ...
            _unitOfWork.Commit();
        }

        // PUT api/<RecipesController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<RecipesController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
