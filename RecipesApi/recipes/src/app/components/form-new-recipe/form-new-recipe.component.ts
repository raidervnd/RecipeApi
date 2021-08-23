import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { TagDto } from 'src/app/dto/tag.dto';
import { StepDto } from 'src/app/dto/step.dto';
import { IngridientDto } from 'src/app/dto/ingredient.dto';

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ElementRef, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-form-new-recipe',
  templateUrl: './form-new-recipe.component.html',
  styleUrls: ['./form-new-recipe.component.css']
})

export class FormNewRecipeComponent implements OnInit {

  public Steps!: StepDto[];
  public Ingredients!: IngridientDto[];
  public Tags: TagDto[] = [];
  public newRecipe!: RecipeDto;
  public url: any;
  public urlRecipe: string = "../../../assets/addphoto.png";
  @Output() valueChange  = new EventEmitter<RecipeDto>();
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = [];
  allFruits: string[] = [];

  @ViewChild('fruitInput')fruitInput!: ElementRef<HTMLInputElement>;

  constructor() {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
        startWith(null),
        map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push(value);
      this.Tags = [{title: value}]
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
      this.Tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allFruits.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }
  
  async ngOnInit(): Promise<void> {
    this.Ingredients = [{title: "", description: ""}]
    this.Steps = [{num: 1, description: ""}];
    this.newRecipe = {
      name: "",
      description: "",
      photo: "assets/addphoto.png",
      likes: 0,
      saved: 0,
      tags: this.Tags,
      steps: this.Steps[0]["description"] != ""? this.Steps: [],
      ingredients: this.Ingredients[0]["title"] != ""? this.Ingredients: []
    }
  }

  onSubmit() {
    this.addRecipeDto();
  }

  addStep() {
    this.Steps.push({num: this.Steps.length + 1, description: ""})
  }
  
  cancelStep(){
    this.Steps.pop();
  }

  addIngredient() {
    this.Ingredients.push({title: "", description: ""} );
  }

  cancelIngredient(){
    this.Ingredients.pop();
  }
  
  async addRecipeDto() { 
    this.valueChange.emit(this.newRecipe);
  }

  onSelectFile(event: any) {
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