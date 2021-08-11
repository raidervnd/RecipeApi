import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { NotificationComponent } from './components/notification/notification.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogElementComponent } from './components/dialog-element/dialog-element.component';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipesPageComponent } from './components/recipes-page/recipes-page.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SmartNavComponent } from './components/smart-nav/smart-nav.component';
import { DialogLoginComponent } from './components/dialog-login/dialog-login.component';
import { DialogSignupComponent } from './components/dialog-signup/dialog-signup.component';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { CreateRecipePageComponent } from './components/create-recipe-page/create-recipe-page.component';
import { FormNewRecipeComponent } from './components/form-new-recipe/form-new-recipe.component';
import { HttpClientModule }   from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotificationComponent,
    DialogElementComponent,
    DialogContentComponent,
    HeaderComponent,
    FooterComponent,
    RecipesPageComponent,
    SearchInputComponent,
    SmartNavComponent,
    DialogLoginComponent,
    DialogSignupComponent,
    PageTitleComponent,
    RecipesListComponent,
    CreateRecipePageComponent,
    FormNewRecipeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
