import { Component } from '@angular/core';
import { Router } from '@angular/router'; // 1. Import Router

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {

  // 2. Inject Router
  constructor(private router: Router) {}

  // 3. Add Logout Logic
  logout() {
    this.router.navigate(['login']);
  }
}