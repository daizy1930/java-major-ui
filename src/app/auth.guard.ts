import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticateService } from './authenticate.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  userrole!:String | null
  constructor(private router:Router,private as:AuthenticateService){
    this.as.userrole.subscribe((ur: String | null) =>{
      this.userrole=ur
    })
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.as.isLoggedIn()){
      if(route.data.role && route.data.role.indexOf(this.userrole)===-1){
        this.router.navigate(["/home"])
        return false
      }
      return true
    }else{
      this.router.navigate(["/login"])
      return false;
    }
      
  }
  
}