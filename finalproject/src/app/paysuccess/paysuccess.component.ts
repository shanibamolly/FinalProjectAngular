import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paysuccess',
  templateUrl: './paysuccess.component.html',
  styleUrls: ['./paysuccess.component.css']
})
export class PaysuccessComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  back(){
    this.router.navigate(['search']);
  }

}
