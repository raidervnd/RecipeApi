using System.Runtime.Serialization;

namespace RecipesApi.Dto
{
    [DataContract]
    public class FileDto
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }
        [DataMember(Name = "path")]
        public long Path { get; set; }
    }
}
