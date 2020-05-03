import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { privateDecrypt } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = 'http://localhost:8000'
  httpheaders = new HttpHeaders({'Content-type': 'application/json'}) 
  
  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any>{
    return this.http.get(this.baseurl + '/products/', 
    {headers: this.httpheaders});
  }

  getCartProducts(): Observable<any>{
    return this.http.get(this.baseurl + '/carts/', 
    {headers: this.httpheaders});
  }

  addProducttoCart(product): Observable<any> {
  const body = {name: product.name , quantity: 1, custID: 1, imgurl:product.imgurl, message: "-" };
  return this.http.post(this.baseurl + '/carts/', body,
  {headers: this.httpheaders});
}

  updateCartProduct(itmeid, itmename, quantity, imgurl): Observable<any> {
    console.log(itmeid, itmename, quantity);
    const body = {name: itmename, quantity: quantity, custID: 1, imgurl: imgurl, message: "-" };
    return this.http.put(this.baseurl + '/carts/'  + itmeid + '/', body,
    {headers: this.httpheaders});
}

}
