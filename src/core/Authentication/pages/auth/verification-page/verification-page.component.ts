import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth-services/auth.service';
import { userVerified } from 'src/core/Authentication/models/user-verifications';

@Component({
  selector: 'app-verification-page',
  templateUrl: './verification-page.component.html',
  styleUrls: ['./verification-page.component.scss'],
})
export class VerificationPageComponent {
  myForm!: FormGroup;
  userData!: userVerified;
  PhoneNumber!: number;
  token!: any;
  constructor(private AuthService: AuthService, private router: Router) {}
  ngOnInit() {
    this.myForm = new FormGroup({
      a: new FormControl(''),
      b: new FormControl(''),
      c: new FormControl(''),
      d: new FormControl(''),
    });

    this.PhoneNumber = this.AuthService.userSharedPhone;
  }

  onOtpChange(event: string): void {
    console.log('event => ', event);
  }

  VerifyPhoneNumber(form: FormGroup) {
    this.userData = {
      code: '1111',
      countrycode: '+966',
      PhoneNumber: this.PhoneNumber,
    };
    console.log(this.PhoneNumber);
    this.AuthService.VerifyPhoneNumber(this.userData).subscribe(
      (response: any) => {
        console.log(response);
        this.token = response.Result.Token;
        localStorage.setItem('token', this.token);
        this.AuthService.isAuthenticated = true;
        this.router.navigate(['/home']);
      }
    );
  }
}
