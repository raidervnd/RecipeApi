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
    { name: 'мясо'},
    { name: 'деликатесы'},
    { name: 'пироги'},
    { name: 'рыба'},
    { name: 'пост'},
    { name: 'пасха2021'},
  ]
  public data!: RecipeDto[];

  constructor(private httpService: RecipeService) { }

  Categories: Category[] = [
    { name: 'Простые блюда', photo: 'icon1.svg'},
    { name: 'Детское', photo: 'icon2.svg'},
    { name: 'От шеф поваров', photo: 'icon3.svg'},
    { name: 'На праздник', photo: 'icon4.svg' }
  ];

  ngOnInit(): void {
  }

  async onProcess(){
    await this.httpService.searchRecipe(this.title).then((data: RecipeDto[]) => {
      this.data = data;
    });;
  }

  async onTagProcess(tag: any) {
    await this.httpService.searchRecipe(tag).then((data: RecipeDto[]) => {
      this.data = data;
    });;
  }

}

export interface Tag {
  name: string;
}

export interface Category {
  name: string;
  photo: string;
}
