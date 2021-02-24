import { Component, OnInit } from '@angular/core';
import { Policy } from '../policy';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { Payment } from '../payment';
import { UserloginauthenticationService } from '../userloginauthentication.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payment: Payment = new Payment();
  
  policy: Policy = new Policy();

  duedate: string;

  id:number;

  constructor(private userService: UserService, private router: Router,
    public userlogin:UserloginauthenticationService) { }

  ngOnInit(): void {
    this.editPolicy();
    this.duedate = '01/03/2020'
  }

  editPolicy() {
    let id = localStorage.getItem("id");
    this.userService.getPolicy(+id)
      .subscribe(data => {
        this.policy = data;
      })
  }

  onUpdate() {      
     this.userService.changeStatus(this.userlogin.id)
          .subscribe(
            data=>{            
            },
            error=>console.log(error)
          );
      this.router.navigate(["success"]);    
  }
  
}
