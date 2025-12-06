import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// FIXED PATHS: Use ./ instead of ../ because app.module is in src/app
import { MainLayoutComponent } from './main-layout.component'; // New Component
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { LogoutComponent } from '../pages/logout/logout.component'; 
import { ProfileComponent } from '../pages/profile/profile.component'; 
import { SupportComponent } from '../pages/support/support.component';
// Removed SidebarComponent as we merged it into MainLayout for simplicity

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent, // Declare MainLayout
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    LogoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }