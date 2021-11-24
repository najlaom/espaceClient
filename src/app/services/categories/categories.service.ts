import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  addCategory(name: string, slug: string, fileToUpload: File, parentId: string): Observable<any> {
    var formData: FormData = new FormData();
    formData.append("name", name);
    formData.append("slug", slug);
    formData.append("categoryImage", fileToUpload, fileToUpload.name);
    formData.append("parentId", parentId);
    
   
    return this.http.post(environment.apiAddCategory, formData, {
      reportProgress: true,
      observe: 'events'
    })
  }
  getDataCategory() {
    let url = `${environment.apiInitDataCategories}`;
    return new Promise((slv) => {
      this.http.post(url, { headers: this.headers })
        .subscribe((data: any) => {
          console.log("getDataCategory : ")
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
 
  
  getCategories(){
    let url = `${environment.apiCategories}`;
    return new Promise((slv) => {
      this.http.post(url, { headers: this.headers })
        .subscribe((data: any) => {
          console.log("getCategories : ")
          console.log(data)
          if (data && data.success && data.result) {
            slv(data.result)
          } else slv(false)
        },
          (error) => {
            slv(false)
          });
    });
  }

}
