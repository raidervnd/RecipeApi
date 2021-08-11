import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
    // async ngOnInit(): Promise<void> {
    //   this.todoItems = await this._http.get<Recipes[]>('/api/Recipes').toPromise();
    // }

}
