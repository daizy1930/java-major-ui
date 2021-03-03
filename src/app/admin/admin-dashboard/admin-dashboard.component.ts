import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  categories: any
  courses: any
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
      console.log(this.courses);
      // console.log("glfjkdsghlgkjds");
      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });
  }

}
