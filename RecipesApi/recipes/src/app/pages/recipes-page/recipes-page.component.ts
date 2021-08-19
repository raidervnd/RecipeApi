import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { RecipeService } from 'src/app/services/recipe.service';


@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  public data!: RecipeDto[];
  
  constructor(private router: Router, private httpService: RecipeService) { }

  ngOnInit(): void {
    this.httpService.getData().then((data: RecipeDto[]) => {
      this.data = data;
    });
  }
  openNewRecipe(){
    this.router.navigate(['/new_recipe']);
  }

}