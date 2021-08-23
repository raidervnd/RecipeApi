import { Component, OnInit } from '@angular/core';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  public title!: string;
  Tags: Tag[] = [
    { name: 'Мясо'},
    { name: 'Деликатесы'},
    { name: 'Пироги'},
    { name: 'Рыба'},
  ]
  public data!: RecipeDto[];

  constructor(private httpService: RecipeService) { }

  ngOnInit(): void {
  }

  async onProcess(){
    await this.httpService.searchRecipe(this.title).then((data: RecipeDto[]) => {
      this.data = data;
    });;
  }

}

export interface Tag {
  name: string;
}