import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { DialogElementComponent } from './components/dialog-element/dialog-element.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { CreateRecipePageComponent } from '../app/components/create-recipe-page/create-recipe-page.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'main', component: HomePageComponent},
    {path: 'recipes', component: RecipesPageComponent},
    {path: 'new_recipe', component: CreateRecipePageComponent},
    {path: 'login', component: DialogElementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
