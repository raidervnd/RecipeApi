import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { RecipeDto } from 'src/app/dto/recipe.dto';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  @Input() Recipe!: RecipeDto;

  constructor() { }

  ngOnInit(): void {
  }

}