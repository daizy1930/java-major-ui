import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent implements OnInit {
  users: Array<any>=[];
 
  len!: number
  len1!: number;

  constructor(private as: AdminService,private router:Router) {
    this.as.updateCartSizeData()
    this.as.lenupdate.subscribe((data: any)=>{
      this.len=data
      this.len1=data
      
    })
   }

  ngOnInit(): void {
    this.as.getLockedUsers().subscribe((data) => {
      this.users = data;
      console.log(">>>",this.users);
      console.log("Inside getLockedUSer");
      console.log(Object.keys(this.users).length);
      this.len=Object.keys(this.users).length;
      console.log(">>>",this.users);
      
    
    },
      (err) => {
        console.log('Error is:', err);

      })

  }

}
