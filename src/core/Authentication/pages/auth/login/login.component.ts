import { AuthService } from './../auth-services/auth.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/core/Authentication/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  myForm!: FormGroup;
  userDate!:user;
  constructor(private AuthService:AuthService,private router:Router){
    
  }
  ngOnInit() {
    this.myForm = new FormGroup({
      MobileNumber: new FormControl(''),
   
    });


    

  }

  onSubmit(form:FormGroup) {
    
    this.userDate={
      MobileNumber:form.get("MobileNumber")?.value,
      countrycode:"+966"

    }
    this.AuthService.userSharedPhone=this.userDate.MobileNumber;
      localStorage.setItem("mob",form.get("MobileNumber")?.value)
    console.log( this.AuthService.userSharedPhone,"shared")
    this.AuthService.SignIn(this.userDate).subscribe((res)=>{

      console.log(res);
    });
    this.router.navigate(['/verification']);

 
  }



}
