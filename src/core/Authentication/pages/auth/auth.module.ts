import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerificationPageComponent } from './verification-page/verification-page.component';
import {MatInputModule} from '@angular/material/input';
import { FullSignUpComponent } from './full-sign-up/full-sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import {Ng2TelInputModule} from 'ng2-tel-input';
import { FooterComponent } from './footer/footer.component';
import { NavAuthComponent } from './nav-auth/nav-auth.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthGuardService } from './auth-services/authguard.service';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    VerificationPageComponent,
    FullSignUpComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    NavAuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    Ng2TelInputModule,
    MatSelectCountryModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule
 

    
  ],
  exports:[NavbarComponent,HeaderComponent,FooterComponent],
  providers: [AuthGuardService]
})
export class AuthModule { }
