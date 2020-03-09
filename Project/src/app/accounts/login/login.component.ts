import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountsService } from '../services/accounts.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  isUserNameValid: boolean;
  isEmailValid: boolean;
  isPassWordValid: boolean;
  hasErrors: boolean;
  message: string;

  constructor(private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.instantiateMyForm();
    this.accountsService.getBehaviorSubject().subscribe((userInfo) => {
      // console.log(userInfo);
      this.hasErrors = userInfo.error_msg ? true : false;
      this.message = userInfo.error_msg ? userInfo.error_msg : userInfo.success_msg;
    })
  }

  instantiateMyForm() {
    this.myForm = new FormGroup({
      userName: new FormControl(undefined, [Validators.required]),
      email: new FormControl(undefined, [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
      passWord: new FormControl(undefined, [Validators.required])
    })
  }

  styleMessage() {
    if (this.hasErrors) {
      return {
        "color": '#ff0000'
      }
    }
    return {
      "color": '#008000'
    }
  }

  onLogIn() {
    // console.log(this.myForm);
    if (this.myForm.controls.userName.valid) {
      this.isUserNameValid = true;
    } else {
      this.isUserNameValid = false;
    }

    if (this.myForm.controls.email.valid) {
      this.isEmailValid = true;
    } else {
      this.isEmailValid = false;
    }

    if (this.myForm.controls.passWord.valid) {
      this.isPassWordValid = true;
    } else {
      this.isPassWordValid = false;
    }

    if (this.myForm.valid) {
      this.accountsService.logIn(this.myForm.value);
    }
  }
}
