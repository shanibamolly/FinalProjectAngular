import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminloginauthenticationService } from '../adminloginauthentication.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  id: number;

  password: string;

  invalidLogin = false;  

  constructor(private router: Router, private adminloginservice: AdminloginauthenticationService) { }

  ngOnInit(): void {
    
  }

  adminLogin() {
    this.router.navigate(['adminregister'])
  }

  checkLogin() {
    this.adminloginservice.authenticate(this.id, this.password)
      .subscribe(
        data => {
          this.router.navigate(['']);
          this.invalidLogin = false
        },      
        error =>{
          this.router.navigate(['**']),
          console.log(error) 
        }
        );
       
        
  }
  
}

