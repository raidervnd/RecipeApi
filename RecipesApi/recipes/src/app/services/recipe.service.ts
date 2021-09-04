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
    return await this._http.get<RecipeDto[]>('/api/Recipes').toPromise();
  }
  async addRecipe(recipeDto: RecipeDto): Promise<void>{
    await this._http.post<void>('/api/Recipes', recipeDto).toPromise()
  }
  async searchRecipe(recipe: string): Promise<any> {
    return await this._http.get<RecipeDto[]>('api/Recipes/' + recipe).toPromise();
  }
  async getRecipeById(id?: number): Promise<RecipeDto>{
    return await this._http.get<RecipeDto>('api/Recipes/recipe/' + id).toPromise();
  }
  async deleteRecipe(id?: number): Promise<void> {
    await this._http.delete<void>('api/Recipes/' + id).toPromise();
  }
  async updateRecipe(data: any): Promise<void> {
    await this._http.put<void>('api/Recipes/edit/', data).toPromise();
  }
}