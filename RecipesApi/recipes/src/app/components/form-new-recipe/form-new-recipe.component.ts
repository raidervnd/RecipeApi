import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { TagDto } from 'src/app/dto/tag.dto';
import { RecipeService } from 'src/app/services/recipe.service';

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
  public persons!: number ;
  public cookingTime!: number;
  public tags!: string;
  public newRecipe!: RecipeDto;
  public recipe!: RecipeDto;
  public urlRecipe: string = "../../../assets/addphoto.png";
  @Output() valueChange  = new EventEmitter<RecipeDto>();
  public photo!: string | null;
  
  constructor() {
  }
  ngOnInit(): void {
  }

  onSubmit() {
    this.addRecipeDto();
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
    };
     this.newRecipe = {
      name: this.name, 
      description: this.description,
      photo: this.url,
      persons: this.persons,
      cookingTimeInMinutes: this.cookingTime,
      likes: 0,
      saved: 0,
      tags: [newtags],
      steps: [],
      ingridients: []
    }
    console.log(this.newRecipe); 
    this.valueChange.emit(this.newRecipe);
  }
  url: any;
    onSelectFile(event: any) {
      //Добавление изображения прямо в базу
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (event: any) => {
             this.url = event.target.result;
             this.urlRecipe = this.url;
        }
        reader.readAsDataURL(event.target.files[0]);
      } 
    }
}
