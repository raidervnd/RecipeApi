import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { TagDto } from 'src/app/dto/tag.dto';

@Component({
  selector: 'app-form-new-recipe',
  templateUrl: './form-new-recipe.component.html',
  styleUrls: ['./form-new-recipe.component.css']
})

export class FormNewRecipeComponent implements OnInit {

  public recipeDto: RecipeDto[] | undefined;
  public Steps: number[] = [1];
  public Ingredients: number[] = [1];
  public name!: string;
  public description!: string;
  public persons!: string ;
  public cookingTime!: string;
  public tags!: string;
  public newRecipe!: RecipeDto;

  private _http: HttpClient;
  
  constructor(public http: HttpClient) {
    this._http = http;
  }
  ngOnInit(): void {
  }
  async addRecipe(recipeDto: RecipeDto): Promise<void>{
    await this._http.post<void>('/api/Recipes', recipeDto).toPromise()
  }  

  addStep() {
    this.Steps.push( this.Steps.length + 1);
    console.log(this.Steps);
  }
  addIngredient() {
    this.Ingredients.push( this.Ingredients.length + 1);
    console.log(this.Ingredients);
  }

  cancelIngredient(){
    this.Ingredients.pop();
  }

  onVoted(cancelIngredient: boolean){
    cancelIngredient ? this.Ingredients.pop(): null;
  }

  onCancel(cancelStep: boolean){
    cancelStep ? this.Steps.pop(): null;
  }
  async addRecipeDto() {
    let newtags: TagDto = {
      title: this.tags,
      recipeId: 5
    };
     this.newRecipe = {
      name: this.name, 
      description: this.description,
      photo: "Photo",
      persons: parseInt(this.persons),
      cookingTimeInMinutes: parseInt(this.cookingTime),
      likes: 0,
      saved: 0,
      tags: [newtags],
      steps: [],
      ingridients: []
    }
    console.log(this.newRecipe);  
    this.addRecipe(this.newRecipe);
  }
  url: any;
    onSelectFile(event: any) { 
      this.url = event.target.files[0];
      console.log(this.url);
    }
}
