import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  imageUrl : string ='assets/img/default-img.jpeg'; 
  fileToUpload : File = null ;
  listCategories: any = [];

  constructor(private _apiService: CategoriesService) { }

  async ngOnInit(){
    await this.getCategories();
  }

  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    } 
    reader.readAsDataURL(this.fileToUpload);
  }


  OnSubmit(name, slug, image, parentId){

    this._apiService.addCategory(name.value, slug.value, this.fileToUpload, parentId.value,).subscribe(
      response => {
        name.value = null;
        slug.value = null;
        image.value =null;
        parentId.value = null;
       
       
        
      }, (error) => {
        if(error.status == 400){
          console.log({error : error})
        }
        if(error.status == 500){
          console.log({error  })
        }
   
      });
    
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

}
