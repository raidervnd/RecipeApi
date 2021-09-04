import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DialogElementComponent } from './components/dialog-element/dialog-element.component';
import { RecipesPageComponent } from './pages/recipes-page/recipes-page.component';
import { CreateRecipePageComponent } from './pages/create-recipe-page/create-recipe-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { RecipeInfoComponent } from './pages/recipe-info/recipe-info.component';

const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'main', component: MainPageComponent},
    {path: 'recipes', component: RecipesPageComponent},
    {path: 'new_recipe', component: CreateRecipePageComponent},
    {path: 'recipes/new_recipe', component: CreateRecipePageComponent},
    {path: 'login', component: DialogElementComponent},
    {path: 'favorites', component: FavoritesPageComponent},
    {path: 'recipes/recipe', component: RecipeInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
