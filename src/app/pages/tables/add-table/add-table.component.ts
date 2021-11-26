import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { TablesService } from 'src/app/services/tables/tables.service';

@Component({
  selector: 'app-add-table',
  templateUrl: './add-table.component.html',
  styleUrls: ['./add-table.component.css']
})
export class AddTableComponent implements OnInit {
  table: any = {}
  listTable: any = []
  constructor(private _apiTableService: TablesService) { }

  async ngOnInit() {
    await this.getTables();
  }

  addTable() {

    console.log("this.product add prod")
    console.log(this.table)

    this._apiTableService.addTable(this.table).subscribe(
      (data) => {
        console.log(data);
        // this.router.navigateByUrl('/fournisseurs', { skipLocationChange: true })
      },
      error => {
        console.log(error)
      });
  }
  getTables() {

    this._apiTableService.getTables().then(
      (data) => {
        this.listTable = data;
        console.log("datacccccccccc")
        console.log(data)

      }
    )
  }

}
