import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

///Importing all the components to route

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from '../app/components/sign-in/sign-in.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { VerifyEmailComponent } from '../app/components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
