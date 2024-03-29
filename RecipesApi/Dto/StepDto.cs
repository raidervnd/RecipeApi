﻿using System.Runtime.Serialization;

namespace RecipesApi.Dto
{
    [DataContract]
    public class StepDto
    {
        [DataMember(Name = "id")]
        public long Id { get; set; }
        
        [DataMember(Name = "num")]
        public int Num { get; set; }
        
        [DataMember(Name = "description")]
        public string Description { get; set; }

        [DataMember( Name = "recipeId" )]
        public long RecipeId { get; set; }
    }
}
