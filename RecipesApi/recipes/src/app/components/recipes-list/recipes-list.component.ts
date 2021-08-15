import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  Recipes: Recipe[] = [
    { photo: 'strawberry.png', 
      name: 'Клубничная Панна-Котта', 
      description: 'Десерт, который невероятно легко и быстро готовится. Советую подавать его порционно в красивых бокалах, украсив взбитыми сливками, свежими ягодами и мятой.',
      tag: ['десерты', 'клубника', 'сливки'],
      time: 35,
      person: 5,
    },
    { photo: 'meat.png', 
      name: 'Мясные фрикадельки', 
      description: 'Мясные фрикадельки в томатном соусе - несложное и вкусное блюдо, которым можно порадовать своих близких. ',
      tag: ['вторые блюда', 'мясо', 'соевый соус'],
      time: 90,
      person: 4,
    },
    { photo: 'pancake.png', 
      name: 'Панкейки', 
      description: 'Панкейки: меньше, чем блины, но больше, чем оладьи. Основное отличие — в тесте, оно должно быть воздушным, чтобы панкейки не растекались по сковородке...',
      tag: ['десерты', 'завтрак', 'блины'],
      time: 40,
      person: 3,
    },
    { photo: 'ice-cream.png', 
      name: 'Полезное мороженое без сахара', 
      description: 'Йогуртовое мороженое сочетает в себе нежный вкус и низкую калорийность, что будет особенно актуально для сладкоежек, соблюдающих диету.',
      tag: ['десерты', 'вишня', 'мороженое'],
      time: 35,
      person: 2,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
export interface Recipe {
  photo: string;
  name: string;
  description: string;
  tag: string[];
  time: number;
  person: number;
}
