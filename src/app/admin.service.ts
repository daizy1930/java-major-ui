import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment.prod'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  
  constructor(private http: HttpClient) {
    // this.http.get(environment.baseUserUrl);
  }

  getCategories(): Observable<any> {
    console.log(environment.baseCategoryUrl)
    return this.http.get<any>(environment.baseCategoryUrl);
  }
  getCourses(): Observable<any> {
    console.log(environment.baseCourseUrl)
    return this.http.get<any>(environment.baseCourseUrl);
  }
 
}
