import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  addTable(table: any) {

    return this.http.post(environment.apiAddTable,
      table);
  }
  getTables(){
    let url = `${environment.apiGetTables}`;
    return new Promise((slv) => {
      this.http.post(url, {headers: this.headers})
        .subscribe((data: any) => {
          console.log("getTables : ")
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
