import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeDto } from 'src/app/dto/recipe.dto';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() Recipe!: RecipeDto;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToRecipeId(recipeId: number| undefined)
  {
    this.router.navigate(['/change_recipe/:id', {id: recipeId}])
  }

}