import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  // Inline styles for simplicity or you can create a .css file
  styles: [`
    .sidebar { min-height: 100vh; width: 250px; }
    .nav-link { cursor: pointer; }
  `]
})
export class SidebarComponent {
  
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['login']);
  }
}