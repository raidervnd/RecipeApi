import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogOptionsComponent } from '../../components/dialog-options/dialog-options.component';
import { Router } from '@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { RecipeDto } from 'src/app/dto/recipe.dto';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  public data!: RecipeDto[];
  Categories: Category[] = [
    { name: 'Простые блюда', text: 'Время приготвления таких блюд не более 1 часа', photo: 'icon1.svg'},
    { name: 'Детское', text: 'Самые полезные блюда которые можно детям любого возраста', photo: 'icon2.svg' },
    { name: 'От шеф-поваров', text: 'Требуют умения, времени и терпения, зато как в ресторане', photo: 'icon3.svg' },
    { name: 'На праздник', text: 'Чем удивить гостей, чтобы все были сыты за праздничным столом', photo: 'icon4.svg' }
  ];
  Tags: Tag[] = [
    { name: 'Мясо'},
    { name: 'Деликатесы'},
    { name: 'Пироги'},
    { name: 'Рыба'},
  ]

  constructor(public dialog: MatDialog, private router: Router, private httpService: RecipeService) {}

  ngOnInit(): void {
    this.httpService.getData().then((data: RecipeDto[]) => {
      this.data = data;
    });
  }
  openDialog() {
    this.dialog.open(DialogOptionsComponent);
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
