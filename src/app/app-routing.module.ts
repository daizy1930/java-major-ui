import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewCategoryComponent } from './admin/view-category/view-category.component';
import { ViewCourseComponent } from './admin/view-course/view-course.component';
import { ViewVideoComponent } from './admin/view-video/view-video.component';
import { AddCategoryComponent } from './admin/add-category/add-category.component';
import { AddCourseComponent } from './admin/add-course/add-course.component';
import { AddVideoComponent } from './admin/add-video/add-video.component';
import { EditCategoryComponent } from './admin/edit-category/edit-category.component';

const routes: Routes = [
  {path: '', component: AdminDashboardComponent },
  {path: 'categories', component: ViewCategoryComponent },
  {path: 'add-category', component: AddCategoryComponent},

  {path: 'edit-category/:id', component: EditCategoryComponent},
  {path: 'courses', component: ViewCourseComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'videos', component: ViewVideoComponent},
  {path: 'add-video', component: AddVideoComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
