import { Component, OnInit } from '@angular/core';
import { Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  loggedin() {
    return localStorage.getItem('token');
  }

  // tslint:disable-next-line:typedef
  Logout() {
     localStorage.removeItem('token');
     this.router.navigate(['/userlogin']);
  }

}
