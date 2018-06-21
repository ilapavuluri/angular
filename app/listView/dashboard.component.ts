import {Router} from "@angular/router";
import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'dashboard',
    templateUrl:'dashboard.component.html'
  })

  export class DashboardComponent implements OnInit{
    constructor(private router: Router) {}

    ngOnInit(){
    }

    createOrder() {
        this.router.navigate(['listView']); 
      }
    
      getOrderList() {
        this.router.navigate(['orderList']); 
      }

  }