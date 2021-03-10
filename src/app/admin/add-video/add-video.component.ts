import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
  courses: any
  videoForm!: FormGroup;
  constructor(private as: AdminService,private router:Router) { }

  ngOnInit(): void {

    this.videoForm = new FormGroup({
      courseId: new FormControl(),
     videoName: new FormControl(),
     videoDesc: new FormControl(),
     videoPath:new FormControl()
  })
  this.as.getCourses()
  .subscribe((data)=>{
    
    
    this.courses=data;
    console.log(this.courses.courseName);
    // console.log("glfjkdsghlgkjds");
    
  },
  (err)=>{
    console.log('Error is:',err);
    
  });





}


addVideo(){
  console.log(this.videoForm.value)
  this.as.addVideo(this.videoForm.value.videoName, this.videoForm.value.videoDesc,this.videoForm.value.videoPath,  this.videoForm.value.courseId).subscribe((data)=>{


    this.router.navigate(['/videos'])


  })
}

selectedCourse(courseId: any){
  console.log(courseId);
  
}





}
