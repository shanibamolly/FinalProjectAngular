import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbyid',
  templateUrl: './searchbyid.component.html',
  styleUrls: ['./searchbyid.component.css']
})
export class SearchbyidComponent implements OnInit {

  id: number;

  policy: Policy = new Policy();

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.id = null;
  }

  submitted = false;

  private searchPolicy() {
    console.log(this.id);
    this.userService.getPolicyById(this.id)
      .subscribe(data => {
        this.policy = data;
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
