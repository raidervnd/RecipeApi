import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import {Location} from '@angular/common';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  public Recipe!: RecipeDto;
  public RecipeId?: number;

  constructor(private httpService: RecipeService, private route: ActivatedRoute, private router: Router, private location: Location) { }

  async ngOnInit(): Promise<void> {
    this.Recipe = {name: "", description: "", steps: [], ingredients: [], tags: []};
    this.RecipeId = Number(this.route.snapshot.paramMap.get('id'));
    this.httpService.getRecipeById(this.RecipeId).then((data: RecipeDto) => {
      this.Recipe = data;
    });
  }
  goBeforePage(){
    this.location.back();
  }

  deleteThisRecipe(){
    this.httpService.deleteRecipe(this.Recipe.id).then( () => this.goBeforePage())
  }

  updateThisRecipe() {
    this.router.navigate(['recipes/new_recipe']);
  }
}