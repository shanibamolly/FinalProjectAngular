import { Component, OnInit } from '@angular/core';
import { UserloginauthenticationService } from '../userloginauthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutuser',
  templateUrl: './logoutuser.component.html',
  styleUrls: ['./logoutuser.component.css']
})
export class LogoutuserComponent implements OnInit {

  constructor(private userauthenticationService:UserloginauthenticationService,
    private router:Router) { }

  ngOnInit(): void {

    this.userauthenticationService.logOut();

    this.router.navigate(['userlogin']);
    
  }
}
