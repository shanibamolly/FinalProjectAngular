import { Component, OnInit } from '@angular/core';
import { Admin } from '../admin';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {

  admin: Admin = new Admin();

  submitted = false;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
  }

  back(): void {
    this.router.navigate(['adminlogin']);
  }

  save() {
    this.adminService.createUser(this.admin)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error)
      );
    this.admin = new Admin();
  }
  
  onadminSubmit() {
    this.save();
  }

}
