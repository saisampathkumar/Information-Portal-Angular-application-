import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user.model';
import { AccountsService } from '../services/accounts.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  userTypes: string[] = ["content provider", "default"];
  hasErrors: boolean;
  message: string;


  signupForm = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    passWord: new FormControl("", [Validators.required]),
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    userType: new FormControl("", [Validators.required])
  });
  formCredentials = new FormGroup({
    userName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]),
    passWord: new FormControl("", [Validators.required]),
  });
  formInfo = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    userType: new FormControl("", [Validators.required]),
  });


  constructor(private accountsService: AccountsService) {
  }

  confirmPass: string;

  ngOnInit() {
    this.accountsService.getBehaviorSubject().subscribe((userInfo) => {
      // console.log(userInfo);
      this.hasErrors = userInfo.error_msg ? true : false;
      this.message = userInfo.error_msg ? userInfo.error_msg : userInfo.success_msg;
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

  onRegister() {

    let data = new User();
    data.userName = this.formCredentials.controls.userName.value;
    data.passWord = this.formCredentials.controls.passWord.value;
    data.userType = this.formInfo.controls.userType.value;
    data.email = this.formCredentials.controls.email.value;
    data.firstName = this.formInfo.controls.firstName.value;
    data.lastName = this.formInfo.controls.lastName.value;
    console.log(data);

    if (this.formCredentials.valid) {
      this.accountsService.register(data);
    }
  }
}
