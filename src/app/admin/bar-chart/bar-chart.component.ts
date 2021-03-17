import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  data!: [];
  courseName: Array<string> = [];
  likes: Array<number>= [];
  chooseCategory!: FormGroup
  selectedCategory: any;
  categories: any;
  courses: any;
  coursesByCat: any;
  coursesByCatCount: any;
  catName: any;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels!: Label[];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData!: ChartDataSets[];
  constructor(private as: AdminService) { }
  ngOnInit() {
    // this.as.getCourseState().subscribe((result) => {
    //   result.forEach(x => {
    //     // this.courseName.push(x.courseName)
    //     this.likes.push(x.likes)
    //     // console.log(x);
    //   })
    // })
    this.chooseCategory = new FormGroup({
      categoryName: new FormControl()
    })
    
    this.as.getCategories()
      .subscribe((data: any) => {
        this.categories = data;
      },
        (err: any) => {
          console.log('Error is:', err);
        });
    this.as.getCourses()
      .subscribe((data: any) => {
        this.courses = data;
        // console.log(this.courses); 
      },
        (err: any) => {
          console.log('Error is:', err);
        });
  }
  getCoursesByCat() {
     console.log("Inside getCoursesByCat");
    let coursename: Array<string> = [];
    let likes: Array<number> = [];
    this.selectedCategory = this.chooseCategory.value.categoryName;
    this.coursesByCat = this.courses.filter((x: any) => { return x.category == this.selectedCategory });
    this.coursesByCat.forEach((element: { courseName: string; likes: number; }) => {
      coursename.push(element.courseName);
      likes.push(element.likes);
    });

    this.courseName = coursename;
    this.likes = likes;
    this.barChartLabels = this.courseName;
    this.barChartData = [{ data: this.likes, label: 'Likes' }];
  }
}