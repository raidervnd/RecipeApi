using Microsoft.AspNetCore.Mvc;
using RecipesApi.Dto;
using Application.Recipe;
using System.Linq;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RecipesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipesController : ControllerBase
    {
        private readonly IRecipeService _recipeService;

        public RecipesController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }

        [HttpGet]
        public RecipeDto[] Get()
        {
             return _recipeService.GetAll().Select( r => new RecipeDto { Id = r.Id, Name = r.Name, Description = r.Description, Photo = r.Photo, Persons = r.Persons, CookingTime = r.CookingTime }).ToArray();
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
