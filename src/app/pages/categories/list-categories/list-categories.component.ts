import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent implements OnInit {

  listCategories: any = [];

  constructor(private _apiService: CategoriesService) { }

  async ngOnInit() {
    await this.getCategories();
  }

  getCategories() {

    this._apiService.getCategories().then(
      (data) => {
        this.listCategories = data;
        console.log("datacccccccccc")
        console.log(data)

      }
    )
  }

  // getDataProducts() {

  //   this._apiService.getDataCategory().then(
  //     (data: any) => {
  //       this.result =data;
  //       console.log("datacccccccccc")
  //       console.log(data)
  //       this.productList = data.products
  //       this.categoryList = data.categories
  //       console.log("this.categoryList")
  //       console.log(this.categoryList)
  //       console.log("this.productList")
  //       console.log(this.productList)

  //     }
  //   )
  // }

}
