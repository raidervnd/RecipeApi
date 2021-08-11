using System.Collections.Generic;

namespace Application.Recipe
{
    public class Recipe
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Photo { get; set; }
        public int Persons { get; set; }
        public int CookingTime { get; set; }
        public List<Tag> Tags { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public List<Step> Steps { get; set; }

        public Recipe(long id, string name, string description, string photo, int persons, int cookingTime, List<Tag> tags)
        {
            Id = id;
            Name = name;
            Description = description;
            Photo = photo;
            Persons = persons;
            CookingTime = cookingTime;
            Tags = tags;
        }

        public Recipe()
        { }
    }
}
