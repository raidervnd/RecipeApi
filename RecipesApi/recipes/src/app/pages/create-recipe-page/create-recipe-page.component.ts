import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { RecipeService } from 'src/app/services/recipe.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {
  public recipe!: RecipeDto;
  public Recipe!: RecipeDto;

  constructor(private httpService: RecipeService, private router: Router, private location: Location) {}

  ngOnInit(): void {
  }

  async sentRecipe(){
    if (this.recipe != undefined) {
    this.Recipe = this.recipe;
    if (this.recipe.steps[0].description == "") { this.Recipe.steps = [];}
    if (this.recipe.ingredients[0].title === "" || this.recipe.ingredients[0].description === "") { this.Recipe.ingredients = [] }
    if (this.recipe.name !== "" && this.recipe.description !== "") {
      await this.httpService.addRecipe(this.Recipe);
      this.router.navigate(['/recipes']);
    }}
  }
  onSubmit(recipe: RecipeDto) {
    this.recipe = recipe;
  }
  goBeforePage(){
    //this.router.navigate(['/']);
    this.location.back();
  }
}
