import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { RecipeService } from 'src/app/services/recipe.service'

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() Recipe!: RecipeDto;
  public recipeId: number = 0;

  constructor(private router: Router, private httpService: RecipeService, private route: ActivatedRoute) { 
    this.route.queryParams.subscribe(params => {
      this.recipeId = params['id']});
  }

  ngOnInit(): void {
  }

  goToRecipeId(recipeId?: number)
  {
    this.router.navigate(['/recipes/recipe', {id: recipeId}])
  }

}