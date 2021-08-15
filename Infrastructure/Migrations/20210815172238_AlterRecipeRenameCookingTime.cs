using Microsoft.EntityFrameworkCore.Migrations;

namespace Infrastructure.Migrations
{
    public partial class AlterRecipeRenameCookingTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CookingTime",
                table: "Recipe",
                newName: "CookingTimeInMinutes");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "CookingTimeInMinutes",
                table: "Recipe",
                newName: "CookingTime");
        }
    }
}
