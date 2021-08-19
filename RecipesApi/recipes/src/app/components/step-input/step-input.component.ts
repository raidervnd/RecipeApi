import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-step-input',
  templateUrl: './step-input.component.html',
  styleUrls: ['./step-input.component.css']
})
export class StepInputComponent implements OnInit {

  @Output() cancel = new EventEmitter<boolean>();
  @Input() Step: any;
  constructor() { }

  ngOnInit(): void {
  }

  cancelStep(cancelStep: boolean){
    this.cancel.emit(cancelStep);
  }

}
