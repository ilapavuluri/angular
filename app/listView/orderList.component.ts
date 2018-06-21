import {Component, OnInit} from '@angular/core';
import { UserService } from '../login-form/user.service';
import { OrderDetails } from '../model/menuItem.model';
import { MenuService } from './itemList.service';
import { OrderService } from './orderList.service';

@Component({
selector:'order-list',
templateUrl:'./orderList.component.html'
})

export class OrderListComponent implements OnInit{

    orderList:Object;
	
	


	selectedItem:OrderDetails;
    
    constructor(private user:UserService,private order:OrderService){

    }

    ngOnInit(){

        this.order.getOrders().subscribe(orderList => {
            this.orderList=this.order.getOrderList();
            });

    }
		
}