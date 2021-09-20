import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOptionsComponent } from '../../components/dialog-options/dialog-options.component';
import { RecipeDto } from 'src/app/dto/recipe.dto';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public data!: RecipeDto[];
  public title!: string;
  Categories: Category[] = [
    { name: 'Простые блюда', text: 'Время приготвления таких блюд не более 1 часа', photo: 'icon1.svg'},
    { name: 'Детское', text: 'Самые полезные блюда которые можно детям любого возраста', photo: 'icon2.svg' },
    { name: 'От шеф-поваров', text: 'Требуют умения, времени и терпения, зато как в ресторане', photo: 'icon3.svg' },
    { name: 'На праздник', text: 'Чем удивить гостей, чтобы все были сыты за праздничным столом', photo: 'icon4.svg' }
  ];
  Tags: Tag[] = [
    { name: 'Мясо'},
    { name: 'Десерты'},
    { name: 'Мороженое'},
    { name: 'Завтрак'},
  ]

  constructor(public dialog: MatDialog, private httpService: RecipeService, private router: Router) {}

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DialogOptionsComponent);
  } 

  openNewRecipe(){
    this.router.navigate(['/new_recipe']);
  }

  async onProcess(){
    await this.httpService.searchRecipe(this.title).then((data: RecipeDto[]) => {
      this.data = data;
    });;
  }

  async onProcessTag(tag: any) {
    await this.httpService.searchRecipe(tag).then((data: RecipeDto[]) => {
      this.data = data;
    });;
  }
}
export interface Category {
  name: string;
  text: string;
  photo: string;
}
export interface Tag {
  name: string;
}
