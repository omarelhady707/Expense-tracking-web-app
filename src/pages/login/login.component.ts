import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    // For now, we simply navigate to home
    if (this.username && this.password) {
      this.router.navigate(['home']);
    } else {
      alert('Please enter username and password');
    }
  }
}