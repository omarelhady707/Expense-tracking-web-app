import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LogoutComponent } from '../pages/logout/logout.component';
import { SupportComponent } from '../pages/support/support.component';
import { ProfileComponent } from '../pages/profile/profile.component';
const routes: Routes = [
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component: HomeComponent},
{path:'profile',component: ProfileComponent},
{path:'support',component: SupportComponent},
{path:'logout',component: LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
