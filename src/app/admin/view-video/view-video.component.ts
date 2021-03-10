import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.component.html',
  styleUrls: ['./view-video.component.scss']
})
export class ViewVideoComponent implements OnInit {

  videos: any
  videoByCourse: any
  courses: any
  constructor(private as: AdminService,private router:Router) { }

  ngOnInit(): void {

    this.as.getCourses()
    .subscribe((data) => {
      this.courses = data
      console.log(this.courses);

      
    },
    (err)=>{
      console.log('Error is:',err);
      
    });

    this.getLocalVideos();

  }

  getVideosByCourse(uniqueCourse: any){
    console.log(uniqueCourse);
   this.videoByCourse=this.videos.filter((x:any)=>{return x.course==uniqueCourse});
   console.log(this.videoByCourse);
   
       }

       editVideo(id:any){
        console.log(id)
        
        return this.router.navigate(['/edit-video/',id])
        
      }
    
      deleteVideo(id: number){
         this.as.deleteVideo(id).subscribe((data)=> 
         {
           console.log("successfully deleted...");
           this.getLocalVideos();
           this.router.navigate(['/videos'])
           
         }
         )
        
      }
  getLocalVideos(){
    this.as.getVideos()
        .subscribe((data)=>{
       
          
          this.videos=data;
          this.videoByCourse=this.videos;
          console.log(this.videos);
           console.log("glfjkdsghlgkjds");
          
        },
        (err)=>{
          console.log('Error is:',err);
          
        });
  }

  
}
