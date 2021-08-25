using System.Runtime.Serialization;

namespace RecipesApi.Dto
{
    [DataContract]
    public class TagDto
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }
        [DataMember(Name = "recipeId")]
        public long RecipeId { get; set; }
        [DataMember(Name = "title")]
        public string Title { get; set; }
    }
}
