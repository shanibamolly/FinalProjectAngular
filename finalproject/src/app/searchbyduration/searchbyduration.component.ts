import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { UserloginauthenticationService } from '../userloginauthentication.service';

@Component({
  selector: 'app-searchbyduration',
  templateUrl: './searchbyduration.component.html',
  styleUrls: ['./searchbyduration.component.css']
})
export class SearchbydurationComponent implements OnInit {

  p:Number=1;

  count:Number=3;
  
  duration:number;

  policies:Policy[];

  constructor(private userService:UserService,private router : Router,
    public userlogin:UserloginauthenticationService) { }

  ngOnInit(): void {
    this.duration=null;
  }
  
  submitted=false;

  private searchPolicy() {
    this.policies=[];
    console.log(this.duration);
    this.userService.getPolicyByDuration(this.duration)
        .subscribe(data=>
          {
            this.policies=data;
            this.submitted=true;
          },
          );
  }
  
onsearchSubmit(){
  this.searchPolicy();
}

register(policy:Policy):void{
  console.log("into edit");
  localStorage.setItem("id",policy.id.toString());
  this.router.navigate(["payment"]);
}

back(){
  this.router.navigate(['search']);
}

}
