import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import { MatInputModule } from '@angular/material/input';
import { FullSignUpComponent } from './full-sign-up/full-sign-up.component';
import { HeaderComponent } from './header/header.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './auth-services/authguard.service';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    VerificationPageComponent,
    FullSignUpComponent,
    HeaderComponent,
    NavAuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    Ng2TelInputModule,
    ReactiveFormsModule,
    SharedModule,
    MatSelectCountryModule,
  ],
  exports: [HeaderComponent, MatSelectCountryModule],
  providers: [AuthGuardService],
})
export class AuthModule {}
