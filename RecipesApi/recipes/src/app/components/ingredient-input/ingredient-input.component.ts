import { Component, Input, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-ingredient-input',
  templateUrl: './ingredient-input.component.html',
  styleUrls: ['./ingredient-input.component.css']
})
export class IngredientInputComponent implements OnInit {

  @Output() voted = new EventEmitter<boolean>();
  @Input() Ingredients: any;

  constructor() { }

  ngOnInit(): void {
  }

  cancelIngredient(cancelIngredient: boolean){
    this.voted.emit(cancelIngredient);
  }

}
