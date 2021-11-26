import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  addProduct(name: string, slug: string, price: Number, offer: Number,
    quantity: Number, fileToUpload: File, sub_product: any, category: any): Observable<any> {

    var formData: FormData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("price", String(price));
    formData.append("offer", String(offer));
    formData.append("category", category);
    formData.append("quantity", String(quantity));
    formData.append("productPicture", fileToUpload, fileToUpload.name);
  
  
    
    return this.http.post(environment.apiAddProduct, formData,
      {
        reportProgress: true,
        observe: 'events'
      })
  }

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
