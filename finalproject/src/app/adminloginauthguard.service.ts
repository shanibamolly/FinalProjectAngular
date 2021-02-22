import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AdminloginauthenticationService } from './adminloginauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminloginauthguardService {

  constructor(private router:Router,
    private adminauthService:AdminloginauthenticationService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    if(this.adminauthService.isUserLoggedIn())    
      return true;    
    this.router.navigate(['adminlogin']);
    return false;
  }
  
}
