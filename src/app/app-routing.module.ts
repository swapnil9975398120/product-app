import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    component: SignInComponent
  },
  {
    path: 'admin-dashboard',
    pathMatch: 'full',
    // canActivate: [AuthenticationValidationService],
    loadChildren: './modules/admin-dashboard/admin-dashboard.module#AdminDashboardModule'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
