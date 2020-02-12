import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonBindingServiceService } from 'src/app/modules/shared/services/common-binding-service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  usernamePlaceholder;
  passwordPlaceHolder;
  signInLabel;
  @Output() onSignInEmitter: EventEmitter<any> = new EventEmitter();
  signInForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });


  constructor(
    private formBuilder: FormBuilder,
    private commonBindingDataService: CommonBindingServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.usernamePlaceholder = this.commonBindingDataService.getLabel('Username');
    this.passwordPlaceHolder = this.commonBindingDataService.getLabel('Password');
    this.signInLabel = this.commonBindingDataService.getLabel('label_sign_in');
    this.signInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
    });
    this.router.url;
    if (this.router.url == 'admin-dashboard') {
      this.commonBindingDataService.displayHeader = false;
    }
  }

  doSignIn() {
    // this.onSignInEmitter.emit(this.getLoginObject());
    // this.getLoginObject()
    this.addUser(this.getLoginObject());

  }

  getLoginObject() {
    const userName = this.signInForm.controls.username.value;
    let signInData = {};
    if (this.signInForm.controls.username.errors === null) {
      signInData = {
        'email': this.signInForm.controls.username.value,
        'password': this.signInForm.controls.password.value,
        'tenantId': '12325232'
      };
    } else {
      signInData = {
        'username': this.signInForm.controls.username.value,
        'password': this.signInForm.controls.password.value,
        'tenantId': '123365456'
      };
    }
    return signInData;
  }

  addUser(signInData) {
    if (signInData.email == 'swap@test.com' && signInData.password == '123456') {
      this.router.navigate(['admin-dashboard']);
      this.commonBindingDataService.displayHeader = false;
      ;


    } else {

      alert('Failure')
    }
    // this.commonBindingDataService.addUser(signInData).subscribe(results => {
    //   debugger
    //   alert("Sign In successfully");
    //   // results.forEach(element => {
    //   //   if (element.id === document.userDetails.cityId) {
    //   //     this.city = element.cityName;
    //   //   }
    //   // });
    // }, (error) => {
    //   debugger
    //   alert("Sign In Failure");

    //   // this.message = [];
    //   // this.message.push({ severity: 'error', summary: 'error', detail: error.general[0].message });
    // });
  }

  onForgotPassword() {
    // this.onForgotPasswordEmitter.emit();
  }

  eventHandler(event) {
    if (event.keyCode === 13) {
      this.onSignInEmitter.emit(this.getLoginObject());
    }
  }

  onSubmit(data) {

  }

}
