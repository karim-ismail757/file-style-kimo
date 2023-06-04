import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { user } from 'src/core/Authentication/models/user';
import { userVerified } from 'src/core/Authentication/models/user-verifications';
import { environment } from 'src/app/environment/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token!: any;
  userSharedPhone!: number;
  isAuthenticated: boolean = false;

  //   private userSubject: BehaviorSubject<User | null>;
  //   public user: Observable<User | null>;
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient // private sharedService: SharedService,
  ) {}

  getHeaders() {
    return {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('AppId', '107'),
    };
  }
  SignIn(body: user): Observable<any> {
    return this.http.post(
      `${this.apiUrl}v2/account/addorget`,
      body,
      this.getHeaders()
    );
  }
  /*========================================================================================*/

  SignIn2(body: user): Observable<any> {
    return this.http.post(
      `${this.apiUrl}v2/account/login`,
      body,
      this.getHeaders()
    );
  }
  /*========================================================================================*/
  SignUp(body: user): Observable<any> {
    return this.http.post(
      `${this.apiUrl}v2/Account/Create`,
      body,
      this.getHeaders()
    );
  }

  /*========================================================================================*/
  VerifyPhoneNumber(body: userVerified): Observable<any> {
    return this.http.post(
      `${this.apiUrl}v2/account/VerifyPhoneNumber`,
      body,
      this.getHeaders()
    );
  }

  /*========================================================================================*/
  ResendVerifyCode(body: user): Observable<any> {
    return this.http.post(
      `${this.apiUrl}v2/Account/ResendVerifyCode`,
      body,
      this.getHeaders()
    );
  }

  isAuthenticateded() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      this.isAuthenticated = true;
      console.log(this.token, 'fromse');
    } else {
      this.isAuthenticated = false;
    }
  }

  /*========================================================================================*/

  // SignIn(body): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}/v2/account/addorget`, body, this.getHeaders())
  // }
  /*========================================================================================*/
  // SignUp(body): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}/v2/Account/Create`, body, this.getHeaders())
  // }
  /*========================================================================================*/
  // VerifyPhoneNumber(body): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}/v2/account/VerifyPhoneNumber`, body, this.getHeaders())
  // }
  /*========================================================================================*/
  // ResendVerifyCode(body): Observable<any> {
  //   return this.http.post(`${environment.apiUrl}/v2/Account/ResendVerifyCode`, body, this.getHeaders())
  // }
  /*========================================================================================*/
}
