using System.Collections.Generic;
using System.Runtime.Serialization;

namespace RecipesApi.Dto
{
    [DataContract]
    public class RecipeDto
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }
        [DataMember(Name = "name")]
        public string Name { get; set; }
        [DataMember(Name = "description")]
        public string? Description { get; set; }
        [DataMember(Name = "photo")]
        public string? Photo { get; set; }
        [DataMember(Name = "persons")]
        public int? Persons { get; set; }
        [DataMember(Name = "cookingTimeInMinutes")]
        public int? CookingTimeInMinutes { get; set; }
        [DataMember(Name = "likes")]
        public int? Likes { get; set; }
        [DataMember(Name = "saved")]
        public int? Saved { get; set; }
        [DataMember(Name = "tags")]
        public List<TagDto>? Tags { get; set; }
        [DataMember(Name = "ingredients")]
        public List<IngredientDto>? Ingredients { get; set; }
        [DataMember(Name = "steps")]
        public List<StepDto>? Steps { get; set; }
    }
}
