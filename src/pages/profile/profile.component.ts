import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Import Router

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  // 2. Inject Router
  constructor(private router: Router) {}

  // 3. Add Logout Logic
  logout() {
    this.router.navigate(['login']);
  }
}