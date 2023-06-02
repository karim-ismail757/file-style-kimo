import { HeaderComponent } from './header/header.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { AuthGuardService } from './auth-services/authguard.service';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'authnav', component: NavAuthComponent },
  { path: 'verification', component: VerificationPageComponent },
  { path: 'home', component: HeaderComponent, canActivate: [AuthGuardService] },
  { path: 'signUp', component: SignUpComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
