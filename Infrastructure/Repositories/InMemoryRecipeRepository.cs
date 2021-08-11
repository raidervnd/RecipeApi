using Application.Recipe;
using System.Collections.Generic;
using System.Linq;

namespace Infrastructure.Repositories
{
    public class InMemoryRecipeRepository : IRecipeRepository
    {
        private List<Recipe> _dataBase = new List<Recipe>() {
          new Recipe(1, "Клубничная Панна-Котта", "Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.", "strawberry.png", 5, 35, new List<Tag>(){ new Tag("десерты"), new Tag("клубника"), new Tag("сливки") }),
          new Recipe(2, "Мясные фрикадельки", "Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких.", "meat.png", 4, 90, new List<Tag>(){ new Tag("вторые блюда"), new Tag("мясо"), new Tag("соевый соус") }),
          new Recipe(3, "Панкейки", "Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...","pancake.png", 3, 40, new List<Tag>(){ new Tag("десерты"), new Tag("завтрак"), new Tag("блины") }),
          new Recipe(4, "Полезное мороженое без сахара", "Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.", "ice-cream.png", 2, 35, new List<Tag>(){ new Tag("десерты"), new Tag("вишня"), new Tag("мороженое") }),
        };

        public List<Recipe> GetAll()
        {
            return _dataBase;
        }

        public Recipe GetById(int id)
        {
            return _dataBase.FirstOrDefault(r => r.Id == id);
        }

        public void Add(Recipe recipe)
        {
            _dataBase.Add(recipe);
        }
    }
}
