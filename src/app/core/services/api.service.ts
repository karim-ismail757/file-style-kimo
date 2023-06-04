import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  // private getHeader(): void {
  //   //Header Configs
  // }

  // public post(endPoint: string, data: T): Observable<T> {
  //   return this.http.post<>(environment.apiUrl + endPoint, data);
  // }
  // public get(endPoint: string, params?: any): Observable<T> {
  //   return this.http.get<T>(environment.apiUrl + endPoint, {
  //     params: params,
  //   });
  // }
}
