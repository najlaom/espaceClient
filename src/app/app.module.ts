import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddCategoryComponent } from './pages/categories/add-category/add-category.component';
import { ListCategoriesComponent } from './pages/categories/list-categories/list-categories.component';
import { ListProductsComponent } from './pages/products/list-products/list-products.component';
import { AddProductComponent } from './pages/products/add-product/add-product.component';
import { EcommerceComponent } from './pages/dashboard/ecommerce/ecommerce.component';
import { AddTableComponent } from './pages/tables/add-table/add-table.component';





@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AddCategoryComponent,
    ListCategoriesComponent,
    ListProductsComponent,
    AddProductComponent,
    EcommerceComponent,
    AddTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
