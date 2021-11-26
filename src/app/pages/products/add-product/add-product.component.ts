import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from 'src/app/services/categories/categories.service';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  imageUrl: string = 'assets/img/default-img.jpeg';
  product: any = {};
  CategoryList: any = [];
  categorypID: string = "";
  fileToUpload: File = null;
  formSubProduct: FormGroup;
  constructor(
    private _apiService: ProductsService,
    private _apiCategoryService: CategoriesService,
    private fb: FormBuilder) {
    this.formSubProduct = fb.group({
      subproducts: fb.array([])
    });
  }

  async ngOnInit() {
    await this.getCategories();
    await this.addNewSubProductGroup();

  }



  //////////////////Image
  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }
  ///////Categories
  getCategories() {

    this._apiCategoryService.getCategories().then(
      (data) => {
        this.CategoryList = data;
        console.log("datacccccccccc")
        console.log(data)

      }
    )
  }
  selectCategory(e: any) {
    console.log("this.selectCategory")
    console.log(e.target.value)
    this.categorypID = e.target.value
  }

  ///////////////////Sub Products 

  get SubProductFormGroups() {
    return this.formSubProduct.get('subproducts') as FormArray
  }

  addNewSubProductGroup() {
    const add = this.formSubProduct.get('subproducts') as FormArray;
    add.push(this.fb.group({
      name: [],
      quantity: []
    }))
    console.log("this.formSubProduct.value.subproducts : ")
    console.log(this.formSubProduct.value.subproducts)
  }
  deleteSubProductGroup(index: number) {
    const add = this.formSubProduct.get('subproducts') as FormArray;
    add.removeAt(index)
  }




  OnSubmit(name, slug, price, offer,
    quantity, image) {
    const prdData: any = new FormData();

    prdData.append('sub_product', this.formSubProduct.value.subproducts);
    this._apiService.addProduct(name.value, slug.value, price.value, offer.value,
      quantity.value, this.fileToUpload, prdData, this.categorypID).subscribe(
        response => {
          name.value = null;
          slug.value = null;
          price.value = null;
          offer.value = null;
          quantity.value = null;
          image.value = null;



          console.log(response)


        }, (error) => {
          if (error.status == 400) {
            console.log({ error: error })

          }
          if (error.status == 500) {
            console.log({ error })
          }

        });



  }


}
