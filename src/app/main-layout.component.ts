import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  templateUrl: 'main-layout.component.html'
})
export class MainLayoutComponent {
  
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['login']);
  }
}