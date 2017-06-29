import { MainComponent } from './main/main.component';
import { UnauthenticatedGuard } from './unauthenticated.guard';
import { LoginComponent } from './login/login.component';
import { AuthenticatedGuard } from './authenticated.guard';
import { DashComponent } from './dash/dash.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: 'forgot',
    component: ForgotPasswordComponent,
    canActivate: [UnauthenticatedGuard]
  },
  {
    path: '',
    component: DashComponent,
    canActivate: [AuthenticatedGuard],
    children: [
      { component: MainComponent, path: 'main' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
