import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { UserLogComponent } from './user-log/user-log.component';
import { ReportsComponent } from './reports/reports.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { ViewVideoComponent } from './view-video/view-video.component';
import { EditVideoComponent } from './edit-video/edit-video.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { EditCategoryComponent } from './edit-category/edit-category.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MaterialModule } from '../material/material.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { LockedUserNotificationComponent } from './locked-user-notification/locked-user-notification.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';




const routes: Routes = [
  // {path: '', component: AdminDashboardComponent },

];


@NgModule({
  declarations: [AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent, UserLogComponent, ReportsComponent, ViewCourseComponent, AddCourseComponent, ViewCategoryComponent, AddCategoryComponent, AddVideoComponent, ViewVideoComponent, EditVideoComponent, EditCourseComponent, EditCategoryComponent, AdminDashboardComponent, DialogBoxComponent, ViewUserComponent, LockedUserNotificationComponent, BarChartComponent, LineChartComponent, PieChartComponent],
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes),
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ChartsModule
 ],
  exports: [AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent, AddCategoryComponent, AddCourseComponent, AddVideoComponent, ViewCategoryComponent, ViewCourseComponent, ViewVideoComponent, EditCategoryComponent, EditCourseComponent, EditVideoComponent, ReportsComponent, UserLogComponent, AdminDashboardComponent, RouterModule, DialogBoxComponent, ViewUserComponent, BarChartComponent, LineChartComponent, PieChartComponent]
})
export class AdminModule { }
