import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '../../../../node_modules/@angular/forms';
import { UserServicesService } from '../../services/user-services.service';
import { User } from 'src/app/models/user';
import * as alertyfy from 'alertifyjs';
import { AlertifyService } from '../../services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup;
  user: User = {};
  userSubmitted: boolean;
  constructor(private fb: FormBuilder, private userService: UserServicesService, private alertify: AlertifyService) { }

  ngOnInit(): void {
    // this.registerationForm = new FormGroup({
    //   name: new FormControl(null, Validators.required),
    //   username: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   // tslint:disable-next-line:max-line-length
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmpassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required]),
    //   address: new FormControl(null, [Validators.required, Validators.maxLength(20)])
    // }, this.passwordMatchingValidatior);
    this.createRegisterationForm();
  }

  // tslint:disable-next-line:typedef
  createRegisterationForm() {
    this.registerationForm = this.fb.group({
      name: [null, Validators.required],
      username: [null, [Validators.required, Validators.minLength(8)]],
      // tslint:disable-next-line:max-line-length
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmpassword: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      address: [null, [Validators.required, Validators.maxLength(20)]]
     }, {validators: this.passwordMatchingValidatior});
  }

  passwordMatchingValidatior(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmpassword').value ? null :
    {notmatched: true};
  }

  // tslint:disable-next-line:typedef
  get name() {
    return this.registerationForm.get('name') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get username() {
    return this.registerationForm.get('username') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get confirmpassword() {
    return this.registerationForm.get('confirmpassword') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get address() {
    return this.registerationForm.get('address') as FormControl;
  }

  // tslint:disable-next-line:typedef
  onSubmit() {
    if (this.registerationForm.valid) {
    // this.user = Object.assign(this.user, this.registerationForm.value);
    this.userService.addUser(this.userData());
    this.registerationForm.reset();
    this.alertify.success('Congrats, you are successfully registered.');
  } else {
    this.alertify.error('Please fill in the required fields.');
    }
  }

  userData(): User {
    return this.user = {
      name: this.name.value,
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
      address: this.address.value
    };
  }

}
