import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  openMainPage(){
    this.router.navigate(['/main']);
  }
  openRecipes() {
    this.router.navigate(['/recipes']);
  }
  openFavoritesPage() {
    this.router.navigate(['/favorites'])
  }

}