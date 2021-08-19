import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeDto } from '../dto/recipe.dto';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  public _http: HttpClient;

  constructor(public http: HttpClient) { 
    this._http = http;
  }
  async getData(): Promise<any> {
    return this._http.get<RecipeDto[]>('/api/Recipes').toPromise();
  }
}