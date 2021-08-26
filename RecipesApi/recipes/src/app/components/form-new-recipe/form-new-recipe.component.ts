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
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-form-new-recipe',
  templateUrl: './form-new-recipe.component.html',
  styleUrls: ['./form-new-recipe.component.css']
})

export class FormNewRecipeComponent implements OnInit {

  public Steps: StepDto[] = [];
  public Ingredients: IngridientDto[] = [];
  public Tags: TagDto[] = [];
  public newRecipe!: RecipeDto;
  public url: any;
  public urlRecipe: string = "../../../assets/addphoto.png";
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  tagCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  tags: string[] = [];
  allTags: string[] = [];
  
  @Output() valueChange  = new EventEmitter<RecipeDto>();
  @ViewChild('tagInput')tagInput!: ElementRef<HTMLInputElement>;
  public photo: any;

  constructor(private httpService: RecipeService) {
    this.filteredFruits = this.tagCtrl.valueChanges.pipe(
      startWith(null),
      map((tag: string | null) => tag ? this._filter(tag) : this.allTags.slice()));
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
      this.Tags.push({title: value});
    }

    event.chipInput!.clear();

    this.tagCtrl.setValue(null);
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
      this.Tags.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.tags.push(event.option.viewValue);
    this.tagInput.nativeElement.value = '';
    this.tagCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allTags.filter(tag => tag.toLowerCase().includes(filterValue));
  }
  
  ngOnInit(): void {
    this.Ingredients = [{title: "", description: ""}]
    this.Steps = [{num: 1, description: ""}];
    this.newRecipe = {
      name: "",
      description: "",
      photo: "assets/addphoto.png",
      likes: 0,
      saved: 0,
      tags: this.Tags,
      steps: this.Steps,
      ingredients: this.Ingredients
    }
      this.httpService.SaveFile(this.photo).then((data: any) => {
        console.log(data);
      });
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
    // if (event.target.files && event.target.files[0]) {
    //   var reader = new FileReader();
    //   reader.onload = (event: any) => {
    //     this.url = event.target.result;
    //     this.urlRecipe = this.url;
    //   }
    //   reader.readAsDataURL(event.target.files[0]);
    // }
    
  }
}