using System.Collections.Generic;

namespace Application.Recipe
{
    public class Recipe
    {
        public long Id { get; set; }
        public string Name { get; set; }
        public string? Description { get; set; }
        public string? Photo { get; set; }
        public int? Persons { get; set; }
        public int? CookingTimeInMinutes { get; set; }
        public int? Likes { get; set; }
        public int? Saved { get; set; }
        public List<Tag> Tags { get; set; }
        public List<Ingredient> Ingredients { get; set; }
        public List<Step> Steps { get; set; }
    }
}
