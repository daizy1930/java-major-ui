import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
 
  id:any
  courseById:any
  editCourseForm!: FormGroup;
  categoryById:any
  cat_name:any
  categories:any
  courses:any
  constructor(private as: AdminService, private router:Router,private route:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.id = this.route.snapshot.params['id']);
   
    this.as.getCourseById(this.id).subscribe((data)=>
    {
      this.as.getCategories().subscribe((data1)=>
      {
        this.categories=data1
       this.cat_name= this.categories.filter((x:any)=>{return x.categoryName == this.courseById.category})
       this.cat_name = this.cat_name[0].categoryId
      },
      error => console.log(error));

      this.courseById=data;
      console.log(this.courseById.courseLogo);
      
      this.editCourseForm = new FormGroup({
        courseId: new FormControl(this.courseById.courseId),
        courseName: new FormControl(this.courseById.courseName),
       courseDesc: new FormControl(this.courseById.courseDesc),
       coursePrice: new FormControl(this.courseById.coursePrice),
       likes: new FormControl(this.courseById.likes),
      categoryId: new FormControl({ value: this.courseById.category, disabled:true}),
      categoryName: new FormControl(this.cat_name),
        oldcourseLogo:new FormControl({value:this.courseById.courseLogo, disabled:true}),
       courseLogo:new FormControl('',[Validators.required])
      })

    
        
      
    
    },
    error => console.log(error));
  }



  updateCourse(){

    this.as.editCourse(this.editCourseForm.value.courseId,this.editCourseForm.value.courseName,this.editCourseForm.value.courseDesc,this.editCourseForm.value.courseLogo,this.editCourseForm.value.coursePrice,this.editCourseForm.value.likes,this.cat_name).subscribe((data)=>{
      console.log("Successfully Updated!");

      this.as.getCourses().subscribe((data)=>{
        this.courses=data;
        console.log(this.courses);
        this.router.navigate(['/courses'])
        
      })

    },(err)=>{
      console.log('Error is:',err);}
    )
  }



}
