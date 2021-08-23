import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {
  public recipe!: RecipeDto;

  constructor(private httpService: RecipeService, private router: Router) {}

  ngOnInit(): void {
  }

  async sentRecipe(){
    await this.httpService.addRecipe(this.recipe);
    this.router.navigate(['/recipes']);
  }
  onSubmit(recipe: RecipeDto) {
    this.recipe = recipe;
  }
}
