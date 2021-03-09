import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {

  categories: any
  courses: any
  coursesByCat:any
  search=""
 
  constructor(private as: AdminService) { 
  }
  
  
  ngOnInit(): void {

    this.as.getCategories()
    .subscribe((data)=>{
      
      
      this.categories=data;
      console.log(this.categories);
      // console.log("glfjkdsghlgkjds");
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });

    this.as.getCourses()
    .subscribe((data)=>{
   
      
      this.courses=data;
      this.coursesByCat=this.courses;
      console.log(this.courses);
      // console.log("glfjkdsghlgkjds");
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });


  
 
 
     

   
  }
  getCoursesByCat(uniqueCat: any){
    console.log(uniqueCat);
   // console.log(this.coursesByCat.value.category);
   this.coursesByCat=this.courses.filter((x:any)=>{return x.category==uniqueCat});
       }
   
       
       getCategory(event:any){
           console.log(event);
       }


 

}
