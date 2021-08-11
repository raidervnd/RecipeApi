import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogLoginComponent} from '../dialog-login/dialog-login.component';
import {DialogSignupComponent} from '../dialog-signup/dialog-signup.component';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})

export class DialogContentComponent {
  
  constructor(public dialog: MatDialog) {}
  
  openDialogLogin() {
    this.dialog.open(DialogLoginComponent);
  } 
  openDialogSignUp() {
    this.dialog.open(DialogSignupComponent);
  }
}