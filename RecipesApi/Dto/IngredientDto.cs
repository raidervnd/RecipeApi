using System.Runtime.Serialization;

namespace RecipesApi.Dto
{
    [DataContract]
    public class IngredientDto
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }
        [DataMember(Name = "recipeId")]
        public long RecipeId { get; set; }
        [DataMember(Name = "title")]
        public string Title { get; set; }
        [DataMember(Name = "description")]
        public string Description { get; set; }
    }
}
