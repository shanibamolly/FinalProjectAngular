import { Component, OnInit } from '@angular/core';
import { AdminloginauthenticationService } from '../adminloginauthentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logoutadmin',
  templateUrl: './logoutadmin.component.html',
  styleUrls: ['./logoutadmin.component.css']
})
export class LogoutadminComponent implements OnInit {

  constructor(private adminauthenticationService: AdminloginauthenticationService,
    private router:Router) { }

  ngOnInit(): void {
    this.adminauthenticationService.logOut();
    this.router.navigate(['adminlogin']);
  }
}
