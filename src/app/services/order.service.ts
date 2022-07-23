import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orderUrl } from '../config/api';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  save(product: Product): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(product);
    return this.http.post(orderUrl, body, {'headers':headers});
  }
  
}
