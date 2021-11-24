import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  getProducts() {
    let url = `${environment.apiProducts}`;
    return new Promise((slv) => {
      this.http.post(url, { headers: this.headers })
        .subscribe((data: any) => {
          console.log("getProducts : ")
          console.log(data)
          if (data && data.success && data.result) {
            slv(data.result)
          } else slv(false)
        },
          (error) => {
            slv(false)
          });
    })
  }
}
