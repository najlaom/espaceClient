import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { ListCategoriesComponent } from './pages/categories/list-categories/list-categories.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { SidebarComponent } from './sidebar/sidebar.component';


const routes: Routes = [
  {
    path: '', component: SidebarComponent, children: [
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
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
