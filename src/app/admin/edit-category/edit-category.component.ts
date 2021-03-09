import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {
  id:any
  categories:any
  categoryById:any
  editCategoryForm!: FormGroup;
  constructor(private route:ActivatedRoute,private as:AdminService,private router:Router) {
    
   }

  ngOnInit(): void {

    console.log(this.id = this.route.snapshot.params['id']);
    this.as.getCategoriesById(this.id).subscribe((data)=>
    {
      this.categoryById=data;
      console.log(this.categoryById.categoryDesc) 
      this.editCategoryForm = new FormGroup({
        categoryId: new FormControl(this.categoryById.categoryId),
        categoryName: new FormControl(this.categoryById.categoryName),
       categoryDesc: new FormControl(this.categoryById.categoryDesc),
        oldcategoryLogo:new FormControl({value:this.categoryById.categoryLogo, disabled:true}),
       categoryLogo:new FormControl('',[Validators.required])
      })
    
    },
    error => console.log(error));
  }
  updateCategory(){
    console.log(this.editCategoryForm.value.categoryLogo);
    this.as.editCategory(this.editCategoryForm.value.categoryName, this.editCategoryForm.value.categoryDesc,this.editCategoryForm.value.categoryLogo,this.editCategoryForm.value.categoryId).subscribe((data)=>{
      console.log(data);
      
      console.log("Successfully Updated!");
    
        this.as.getCategories()
        .subscribe((data)=>{
          
          
          this.categories=data;
          console.log(this.categories);
          this.router.navigate(['/categories'])
          
        },
        (err)=>{
          console.log('Error is:',err);
          
        });
      
    })
    
  }



}
