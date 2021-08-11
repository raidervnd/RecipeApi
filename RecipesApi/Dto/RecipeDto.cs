using System.Collections.Generic;
using System.Runtime.Serialization;

namespace RecipesApi.Dto
{
    [DataContract]
    public class RecipeDto
    {
        [DataMember(Name = "id")]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; } 
        public string Photo { get; set; }
        public int Persons { get; set; }
        public int CookingTime { get; set; }
        public List<TagDto> Tags { get; set; }
        public List<IngredientDto> Ingredients { get; set; }
        public List<StepDto> Steps { get; set; }
    }
}
