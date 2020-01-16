import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonBindingServiceService } from 'src/app/modules/shared/services/common-binding-service.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  usernamePlaceholder;
  passwordPlaceHolder;
  signInLabel;

  signInForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });


  constructor(
    private formBuilder: FormBuilder,
    private commonBindingDataService: CommonBindingServiceService
  ) { }

  ngOnInit() {
    this.usernamePlaceholder = this.commonBindingDataService.getLabel('Username');
    this.passwordPlaceHolder = this.commonBindingDataService.getLabel('Password');
    this.signInLabel = this.commonBindingDataService.getLabel('label_sign_in');
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
    });
  }

  doSignIn() {
    // this.onSignInEmitter.emit(this.getLoginObject());
  }

  getLoginObject() {
    // const userName = this.signInForm.controls.username.value;
    // let signInData = {};
    // if (this.signInForm.controls.username.errors === null) {
    //   signInData = {
    //     'email': this.signInForm.controls.username.value,
    //     'password': this.signInForm.controls.password.value,
    //     'tenantId': AppSettings.TENANT
    //   };
    // } else {
    //   signInData = {
    //     'username': this.signInForm.controls.username.value,
    //     'password': this.signInForm.controls.password.value,
    //     'tenantId': AppSettings.TENANT
    //   };
    // }
    // return signInData;
  }

  onForgotPassword() {
    // this.onForgotPasswordEmitter.emit();
  }

  eventHandler(event) {
    // if (event.keyCode === 13) {
    //   this.onSignInEmitter.emit(this.getLoginObject());
    // }
  }
  onSubmit(data) {

  }

}
