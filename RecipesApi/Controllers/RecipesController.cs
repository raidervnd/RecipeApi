using Microsoft.AspNetCore.Mvc;
using RecipesApi.Dto;
using Application.Recipe;
using System.Linq;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace RecipesApi.Controllers
{
    // TODO
    // 1 ДТО для рецепта
    // 2 Получение рецепта по ID 
    // 3 Заполнить доменный объект Recipe всеми необходимыми полями
    // 4 Поправить все замечания по пулреквесту на фронтенде


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
            return _recipeService.GetAll().Select( r => new RecipeDto { Name = r.Name, Description = r.Description, Photo = r.Photo, Persons = r.Persons, CookingTime = r.CookingTime, Tags = r.Tags }).ToArray();
        }

        [HttpGet("{id}")]
        public Recipe GetById(int id)
        {
            return _recipeService.GetById(id);
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
