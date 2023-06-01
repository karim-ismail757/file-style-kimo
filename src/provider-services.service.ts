import { Injectable } from '@angular/core';
import { environment } from './app/environment/environment';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { loyality } from './app/models/loyality';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProviderServicesService {
  servicesIds:any= [];
  cartNo!: number;
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}
  getLoyalityPoints(ClientId: loyality) {
    return this.http.post(
      `${environment.apiUrl}ClientPointsBalance/GetClientPointsDashboard`,
      ClientId,
      this.getHeaders()
    );
  }
  getHeadersFinal(): any {
    throw new Error('Method not implemented.');
  }

  getHeaders() {
    return {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('AppId', '105')
        .set('Authorization', 'Bearer ' + localStorage.getItem('token')),
    };
  }

  getAllServicesData(data: any): Observable<any> {
    return this.http.post(
      'https://api-stage.glamera.com/api/Category/GlameraCategoriesAndOffers',
      data,
      this.getHeaders()
    );
  }

  getEmployee(data: any) {
    return this.http.post(
      `${environment.apiUrl}Employee/GetBasic`,
      data,
      this.getHeaders()
    );
  }

  getTimeSlot(data: any) {
    return this.http.post(
      `${this.apiUrl}v2/BookingService/GetEmployeeTimeSlots`,
      data,
      this.getHeaders()
    );
  }

  getServicesToCart(): Observable<any> {
    return this.http.get(
      'https://api-stage.glamera.com/api/ShoppingCart',
      this.getHeaders()
    );
  }

  deleteService(id:number): Observable<any> {
    return this.http.delete<any>(
    `https://api-stage.glamera.com/api/ShoppingCart/Service/${id}`,
      this.getHeaders()
    );
  }


  BookNewServices(body:any ):Observable<any> {
    return  this.http.post('https://api-stage.glamera.com/api/ShoppingCart', body);
  }
}
