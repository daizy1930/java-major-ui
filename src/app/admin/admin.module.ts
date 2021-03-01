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




@NgModule({
  declarations: [AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent, UserLogComponent, ReportsComponent, ViewCourseComponent, AddCourseComponent, ViewCategoryComponent, AddCategoryComponent, AddVideoComponent, ViewVideoComponent, EditVideoComponent, EditCourseComponent, EditCategoryComponent],
  imports: [
    CommonModule
  ],
  exports: [AdminHeaderComponent, AdminFooterComponent, AdminSidebarComponent, AddCategoryComponent, AddCourseComponent, AddVideoComponent, ViewCategoryComponent, ViewCourseComponent, ViewVideoComponent, EditCategoryComponent, EditCourseComponent, EditVideoComponent, ReportsComponent, UserLogComponent]
})
export class AdminModule { }
