import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserloginauthenticationService } from '../userloginauthentication.service';

@Component({
  selector: 'app-searchbyname',
  templateUrl: './searchbyname.component.html',
  styleUrls: ['./searchbyname.component.css']
})
export class SearchbynameComponent implements OnInit {

  p: Number = 1;

  count: Number = 3;

  name: string;

  policies: Policy[];

  constructor(private userService: UserService, private router: Router,
    public userlogin:UserloginauthenticationService) { }

  ngOnInit(): void {
    this.name = null;
  }

  submitted = false;

  private searchPolicy() {
    this.policies = [];
    console.log(this.name);
    this.userService.getPolicyByName(this.name)
      .subscribe(data => {
        this.policies = data;
        this.submitted = true;
      },
      );
  }

  onsearchSubmit() {
    this.searchPolicy();
  }

  register(policy: Policy): void {
    console.log("into edit");
    localStorage.setItem("id", policy.id.toString());
    this.router.navigate(["payment"]);
  }

  back() {
    this.router.navigate(['search']);
  }

}
