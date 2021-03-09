import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment.prod'
import { Observable } from 'rxjs';
import { Category } from './category';


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
 
  getCategoriesById(id: any): Observable<any>{
    return this.http.get<any>(environment.baseCategoryUrl+"/"+id);
  }
  getCategoriesCount(): Observable<any> {
    console.log(environment.baseCategoryUrl)
    return this.http.get<any>(environment.baseCategoryUrl+"/total");
  }
  getCourseCount(): Observable<any> {
    console.log(environment.baseCategoryUrl)
    return this.http.get<any>(environment.baseCourseUrl+"/total");
  }
  getUserCount(): Observable<any> {
    console.log(environment.baseUserUrl)
    return this.http.get<any>(environment.baseUserUrl+"/total");
  }

  addCategory(categoryName: any, categoryDesc: any, categoryLogo:any):Observable<any>{
    // console.log(category);   
    return this.http.post<any>(environment.baseCategoryUrl+"/add",{categoryName, categoryDesc, categoryLogo})
  }

  editCategory(categoryName: any, categoryDesc: any, categoryLogo:any,categoryId:any):Observable<any>{
    // console.log(category);   
    return this.http.put<any>(environment.baseCategoryUrl+"/"+categoryId,{categoryName, categoryDesc, categoryLogo,categoryId})
  }
  deleteCategory(id: any): Observable<any>{
    return this.http.delete<any>(environment.baseCategoryUrl+"/"+id);
  }

  }

