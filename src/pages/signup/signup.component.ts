import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent { // <--- This 'export' must be here
  firstName = '';
  lastName = '';
  email = '';
  username = '';
  password = '';
  retypePassword = '';

  constructor(private router: Router) {}

  onSignup() {
    this.router.navigate(['login']);
  }
}