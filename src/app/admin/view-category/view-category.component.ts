import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminService } from 'src/app/admin.service';
import { asLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.scss']
})
export class ViewCategoryComponent implements OnInit {



  categories: any

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

    
        
  }
}
