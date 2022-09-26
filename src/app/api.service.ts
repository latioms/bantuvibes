import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ApiService { 

  constructor(private _http : HttpClient) { }

  url = 'http://localhost:3000';
  // get the datas from backend

  getAllReservations(): Observable<any>{
    return this._http.get(`${this.url}/getReservations`);
  }

  // add datas

  addReservations(data: any): Observable<any> {
    return this._http.post(`${this.url}/addReservation`, data);
  }


}
