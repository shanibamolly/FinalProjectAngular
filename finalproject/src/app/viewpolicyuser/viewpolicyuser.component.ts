import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { Observable } from 'rxjs';
import { Policy } from '../policy';

@Component({
  selector: 'app-viewpolicyuser',
  templateUrl: './viewpolicyuser.component.html',
  styleUrls: ['./viewpolicyuser.component.css']
})
export class ViewpolicyuserComponent implements OnInit {

  p: Number = 1;

  count: Number = 3;

  policies: Observable<Policy[]>


  constructor(private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.policies = this.adminService.getPolicyList();
  }

  
  back() {
    this.router.navigate(['search']);
  }

}
