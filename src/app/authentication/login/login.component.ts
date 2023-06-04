import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { user } from 'src/core/Authentication/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  myForm!: FormGroup;
  userDate!: user;
  constructor(
    private AuthService: AuthService,
    private router: Router,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.myForm = new FormGroup({
      MobileNumber: new FormControl(''),
    });
  }

  onSubmit(form: FormGroup) {
    this.userDate = {
      MobileNumber: form.get('MobileNumber')?.value,
      countrycode: '+966',
    };
    this.AuthService.userSharedPhone = this.userDate.MobileNumber;
    localStorage.setItem('mob', form.get('MobileNumber')?.value);
    console.log(this.AuthService.userSharedPhone, 'shared');
    this.AuthService.SignIn(this.userDate).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['auth/verification'], { relativeTo: this.route });
  }
}
