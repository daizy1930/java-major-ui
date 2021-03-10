import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  categories: any
  courseForm!: FormGroup;
  constructor(private as: AdminService,private router:Router) { }

  ngOnInit(): void {

    this.courseForm = new FormGroup({
      categoryId: new FormControl(),
      courseName: new FormControl(),
      courseDesc: new FormControl(),
      courseLogo:new FormControl(),
      coursePrice: new FormControl(),
      likes:new FormControl(0)

    })
    
    this.as.getCategories()
    .subscribe((data)=>{
      
      
      this.categories=data;
      console.log(this.categories.categoryName);
      // console.log("glfjkdsghlgkjds");
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });

  }

  addCourse(){
    console.log(this.courseForm.value)
    this.as.addCourse(this.courseForm.value.courseName, this.courseForm.value.courseDesc,this.courseForm.value.courseLogo, this.courseForm.value.coursePrice, this.courseForm.value.likes, this.courseForm.value.categoryId).subscribe((data)=>{
      this.router.navigate(['/courses'])
    })
  }

  selectedCategory(catId: any){
    console.log(catId);
    
  }

 
  

}
