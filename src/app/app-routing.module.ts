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
import { EditCourseComponent } from './admin/edit-course/edit-course.component';
import { EditVideoComponent } from './admin/edit-video/edit-video.component';
import { ViewUserComponent } from './admin/view-user/view-user.component';
import { LockedUserNotificationComponent } from './admin/locked-user-notification/locked-user-notification.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { BarChartComponent } from './admin/bar-chart/bar-chart.component';
import { LineChartComponent } from './admin/line-chart/line-chart.component';
import { PieChartComponent } from './admin/pie-chart/pie-chart.component';
import { CommentChartComponent } from './admin/comment-chart/comment-chart.component';
import { VideoChartComponent } from './admin/video-chart/video-chart.component';
import { UserLogComponent } from './admin/user-log/user-log.component';

const routes: Routes = [
  {
    path: '', component: AdminDashboardComponent,
    data: { role: "ADMIN" }
  },
  {
    path: 'categories', component: ViewCategoryComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'add-category', component: AddCategoryComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'edit-category/:id', component: EditCategoryComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'courses', component: ViewCourseComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'edit-course/:id', component: EditCourseComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'add-course', component: AddCourseComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'videos', component: ViewVideoComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'edit-video/:id', component: EditVideoComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'add-video', component: AddVideoComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'users', component: ViewUserComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'locked-notification', component: LockedUserNotificationComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'user-logs', component: UserLogComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'reports', component: ReportsComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'bar-chart', component: BarChartComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'line-chart', component: LineChartComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'pie-chart', component: PieChartComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'comment-chart', component: CommentChartComponent,
    data: { role: "ROLE_ADMIN" }
  },
  {
    path: 'video-chart', component: VideoChartComponent,
    data: { role: "ROLE_ADMIN" }
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
