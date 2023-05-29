import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { AuthGuardService } from './auth-services/authguard.service';

const routes: Routes = [
 
 { path: 'login', component: LoginComponent },
  { path: 'signUp', component:SignUpComponent },
  { path: 'authnav', component: NavAuthComponent},
  { path: 'verification', component: VerificationPageComponent
 },
 { path: 'home', component: HeaderComponent,

},



{ path: '', component: HeaderComponent,  },

{ path: 'footer', component: FooterComponent
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
