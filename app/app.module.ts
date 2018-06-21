import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login.formcomponent';
import { RouterModule,Routes} from '@angular/router';
import { UserService } from './login-form/user.service';
import { AuthGuard } from './login-form/authguard.guard';
import { HttpModule } from '@angular/http';
import { ItemListComponent } from './listView/itemList.component';
import { DashboardComponent } from './listView/dashboard.component';
import { MenuService } from './listView/itemList.service';
import { OrderListComponent } from './listView/orderList.component';
import { OrderService } from './listView/orderList.service';
import { HttpClientModule } from '@angular/common/http'
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import {MatTabsModule} from '@angular/material/tabs';



const appRoutes:Routes = [
  {
    path:'',
    component:LoginFormComponent
  },
  {
   path:'dashboard',
   canActivate:[AuthGuard],
   component:DashboardComponent
  },
  {
    path:'listView',
    canActivate:[AuthGuard],
    component:ItemListComponent
   },
   {
    path:'orderList',
    canActivate:[AuthGuard],
    component:OrderListComponent
   }

]


@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot(appRoutes),HttpModule,HttpClientModule],
  declarations: [ AppComponent,HeaderComponent,LoginFormComponent,ItemListComponent,DashboardComponent,OrderListComponent],
  providers:[UserService,AuthGuard,MenuService,OrderService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
