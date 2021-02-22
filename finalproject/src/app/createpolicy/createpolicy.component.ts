import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { AdminloginauthenticationService } from '../adminloginauthentication.service';

@Component({
  selector: 'app-createpolicy',
  templateUrl: './createpolicy.component.html',
  styleUrls: ['./createpolicy.component.css']
})
export class CreatepolicyComponent implements OnInit {

  policy: Policy = new Policy();
  submitted = false;
  constructor(private adminService: AdminService, private router: Router,
    public adminlogin:AdminloginauthenticationService) { }

  ngOnInit(): void {
  }
  newPolicy(): void {
    this.submitted = false;
    this.policy = new Policy();
  }
  save() {
    this.adminService.createPolicy(this.policy)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
        },
        error => console.log(error));
    this.policy = new Policy();
  }
  onpolicySubmit() {

    this.save();
  }
 
}
