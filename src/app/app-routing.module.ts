import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component'; // Import Layout
import { HomeComponent } from '../pages/home/home.component'; // Fixed path
import { LoginComponent } from '../pages/login/login.component'; // Fixed path
import { SignupComponent } from '../pages/signup/signup.component'; // Fixed path
import { ProfileComponent } from '../pages/profile/profile.component'; // Fixed path
import { SupportComponent } from '../pages/support/support.component'; // Fixed path

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  
  // PARENT ROUTE: Main Layout (Sidebar)
  { 
    path: '', 
    component: MainLayoutComponent, 
    children: [
      // CHILD ROUTES: These load inside the router-outlet of MainLayout
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'support', component: SupportComponent }
    ]
  },

  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }