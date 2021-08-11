import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})

export class PageTitleComponent implements OnInit {
  // @Input() label: string = 'label';
  // @Input() focused: boolean = false;
  // @Input() class: any;

  // @Output() onChangeEvent = new EventEmitter();

  // @Input() text: string = '';

  constructor() {}

  ngOnInit(): void {}

  // onFocus() {
  //   this.focused = true;
  // }

  // onBlur() {
  //   this.focused = false;
  //   this.onChangeEvent.emit(this.text);
  // }

  // onChange(event: any) {
  //   this.text = event.target.value;
  // }

  @Output() buttonClickEvent = new EventEmitter();
  buttonClick() {
    this.buttonClickEvent.emit(true);
  }
}
