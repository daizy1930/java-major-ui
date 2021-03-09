import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryForm!: FormGroup;
  constructor(private as:AdminService,private router:Router) { }

  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      categoryName: new FormControl(),
     categoryDesc: new FormControl(),
     categoryLogo:new FormControl(),
    })
  }

  addCategory(){
    console.log(this.categoryForm.value)
    this.as.addCategory(this.categoryForm.value.categoryName, this.categoryForm.value.categoryDesc,this.categoryForm.value.categoryLogo).subscribe((data)=>{})
  }
}
