import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent  implements OnInit{
  courseName : Array<string> = [];
  avgrating = [];
  chooseCategory!: FormGroup;
  categories: any;
  courses: any;
  selectedCategory: any;
  coursesByCat: any;
  lineChartData!: ChartDataSets[] ;
  lineChartLabels!: Label[] ;
  lineChartOptions = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType : ChartType = 'line';
  constructor(private as: AdminService) { }
  ngOnInit(): void {
    // this.as.getCourseState().subscribe((result)=>{
    //   result.forEach(x => {
    //     this.courseName.push(x.courseName)
    //     this.avgrating.push(x.avgrating)
    //   });
    // })
    // console.log(this.courseName);
    // console.log(this.avgrating);
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
    // console.log("Inside getCoursesByCat");
    let coursename: Array<string> = [];
    let avgrating: Array<number> = [];
    this.selectedCategory = this.chooseCategory.value.categoryName;
    this.coursesByCat = this.courses.filter((x: any) => { return x.category == this.selectedCategory });
    this.coursesByCat.forEach((element: { courseName: string; avgrating: number; }) => {
      coursename.push(element.courseName);
      avgrating.push(element.avgrating);
    });
    this.courseName = coursename;
    this.lineChartLabels = this.courseName;
    this.lineChartData =  [
      { data: this.avgrating, label: 'Ratings' },
    ];
  }
}