import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService: AuthService,
              private alertify: AlertifyService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onLogin(loginForm: NgForm) {
    console.log(loginForm.value);
    const token = this.authService.authUser(loginForm.value);
    if (token) {
      localStorage.setItem('token', token.username);
      this.alertify.success('Welcome to FoodDelivery!');
      this.router.navigate(['/shop']);
    } else {
      this.alertify.error('The username or password combination that you have entered is incorrect! Please try again.');
    }
  }

}
