namespace Application.Recipe
{
    public class Step
    {
        public int Num { get; set; }
        public string Description { get; set; }
        public Step( int id, int num, string description)
        {
            Num = num;
            Description = description;

        }
    }
}
