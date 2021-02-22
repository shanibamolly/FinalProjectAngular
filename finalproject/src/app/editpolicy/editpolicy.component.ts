import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editpolicy',
  templateUrl: './editpolicy.component.html',
  styleUrls: ['./editpolicy.component.css']
})
export class EditpolicyComponent implements OnInit {

  policy: Policy = new Policy();

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.editPolicy();
  }

  editPolicy() {
    let id = localStorage.getItem("id");
    this.adminService.getPolicy(+id)
      .subscribe(data => {
        this.policy = data;
      })
  }

  onUpdate() {
    console.log("into update");
    this.adminService.updatePolicy(this.policy)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(["view"])
      },
        error => console.log(error));
    this.policy = new Policy();
  }

}
