import {Component, OnInit} from '@angular/core';
import { UserService } from '../login-form/user.service';
import { MenuItem } from '../model/menuItem.model';
import { MenuService } from './itemList.service';

@Component({
selector:'item-list',
templateUrl:'./itemList.component.html',
styleUrls:['./itemList.component.css']
})

export class ItemListComponent implements OnInit{

    menuItems:Object;
	
	


	selectedItem:MenuItem;
    
    constructor(private user:UserService,private menu:MenuService){

    }

    ngOnInit(){

        this.menu.getMenuList().subscribe(menuList => {
            this.menuItems=this.menu.getMenuItems();
            });

    }
	
	onSelect(menuItem:MenuItem):void{
        this.selectedItem=menuItem;
    this.user.getLoggedInUser();
    }
    
    createOrder(){
        this.menu.createOrder(this.user.getLoggedInUser(),this.selectedItem.name,this.selectedItem.quantity.toString()).subscribe(menuList => {
            this.menuItems=this.menu.getMenuItems();
            });
    }
		
}