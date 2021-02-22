import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserloginauthenticationService } from '../userloginauthentication.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router: Router,public userlogin:UserloginauthenticationService) { }

  ngOnInit(): void {
  }

  byname() {
    this.router.navigate(['searchbyname']);
  }

  byduration() {
    this.router.navigate(['searchbyduration']);
  }

  byid() {
    this.router.navigate(['searchbyid']);
  }
}
