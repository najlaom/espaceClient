import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { ListCategoriesComponent } from './pages/categories/list-categories/list-categories.component';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { AddTableComponent } from './pages/tables/add-table/add-table.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
      ///Ecommerce
      {
        path: 'ecommerce', component: EcommerceComponent
      },
      ///Category
      {
        path: 'add-category', component: AddCategoryComponent
      },
      {
        path: 'categories', component: ListCategoriesComponent
      },
      ///product
      {
        path: 'products', component: ListProductsComponent
      },
      {
        path: 'add-product', component: AddProductComponent
      },
      ///table
      {
        path: 'tables', component: AddTableComponent
      },
      


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
