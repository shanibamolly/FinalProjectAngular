import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginauthenticationService } from '../userloginauthentication.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;

  password: string;

  invalidLogin = false;

  constructor(private router: Router, private userloginservice: UserloginauthenticationService) { }

  ngOnInit(): void {
  }

  userLogin() {
    this.router.navigate(['userregister'])
  }

  checkLogin() {
    this.userloginservice.authenticate(this.id, this.password)
      .subscribe(
        data => {
          this.router.navigate(['search']);
          this.invalidLogin = false
        },
        error => {
          this.router.navigate(['**']),
            console.log(error)
        }
      );

  }



}

