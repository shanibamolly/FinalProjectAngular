import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserregisterComponent } from './userregister/userregister.component';
import { LogoutadminComponent } from './logoutadmin/logoutadmin.component';
import { LogoutuserComponent } from './logoutuser/logoutuser.component';
import { CreatepolicyComponent } from './createpolicy/createpolicy.component';
import { PaymentComponent } from './payment/payment.component';
import { CommonModule } from '@angular/common';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { SearchComponent } from './search/search.component';
import { SearchbynameComponent } from './searchbyname/searchbyname.component';
import { SearchbyidComponent } from './searchbyid/searchbyid.component';
import { SearchbydurationComponent } from './searchbyduration/searchbyduration.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    UserComponent,
    AdminregisterComponent,
    UserregisterComponent,
    LogoutadminComponent,
    LogoutuserComponent,
    CreatepolicyComponent,
    PaymentComponent,
    PaysuccessComponent,
    ViewpolicyComponent,
    EditpolicyComponent,
    SearchComponent,
    SearchbynameComponent,
    SearchbyidComponent,
    SearchbydurationComponent,
    PagenotfoundComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
