import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private _http: HttpClient) {

  }

  getProducts(): Observable<any> {
    var request = "products";
    var url = environment.urlStore + request;
    return this._http.get(url);

  }

  getProductById(id: number): Observable<any> {
    var request = "products/" + id;
    var url = environment.urlStore + request;
    
    return this._http.get(url);
  }

}
