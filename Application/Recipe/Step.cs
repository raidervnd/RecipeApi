using System.ComponentModel.DataAnnotations.Schema;

namespace Application.Recipe
{
    public class Step
    {
        public long Id { get; set; }
        public long RecipeId { get; set; }
        public int Num { get; set; }
        public string Description { get; set; }

        [ForeignKey( "RecipeId" )]
        public Recipe Recipe { get; set; }
    }
}
