import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  public _http: HttpClient;

  constructor(public http: HttpClient) { 
    this._http = http;
  }

  async getData(): Promise<any> {
    return this._http.get<any[]>('/api/Recipes').toPromise();
  }
}