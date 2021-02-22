import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Policy } from '../policy';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { AdminloginauthenticationService } from '../adminloginauthentication.service';

@Component({
  selector: 'app-viewpolicy',
  templateUrl: './viewpolicy.component.html',
  styleUrls: ['./viewpolicy.component.css']
})
export class ViewpolicyComponent implements OnInit {

  p: Number = 1;

  count: Number = 3;

  policies: Observable<Policy[]>

  constructor(private adminService: AdminService, private router: Router,
    public adminlogin:AdminloginauthenticationService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.policies = this.adminService.getPolicyList();
  }

  editPolicy(policy: Policy): void {
    console.log("into edit");
    localStorage.setItem("id", policy.id.toString());
    this.router.navigate(["edit"]);
  }

  back() {
    this.router.navigate(['add']);
  }

}
