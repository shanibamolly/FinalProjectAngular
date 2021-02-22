import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserloginauthenticationService } from './userloginauthentication.service';

@Injectable({
  providedIn: 'root'
})
export class UserloginauthguardService {

  constructor(private router:Router,
    private userauthService:UserloginauthenticationService) { }

  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot)
  {
    if(this.userauthService.isUserLoggedIn())    
      return true;    
    this.router.navigate(['userlogin']);
    return false;
  }
  
}
