import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { UserregisterComponent } from './userregister/userregister.component';
import { LogoutadminComponent } from './logoutadmin/logoutadmin.component';
import { LogoutuserComponent } from './logoutuser/logoutuser.component';
import { AdminloginauthguardService } from './adminloginauthguard.service';
import { UserloginauthguardService } from './userloginauthguard.service';
import { CreatepolicyComponent } from './createpolicy/createpolicy.component';
import { PaymentComponent } from './payment/payment.component';
import { PaysuccessComponent } from './paysuccess/paysuccess.component';
import { ViewpolicyComponent } from './viewpolicy/viewpolicy.component';
import { EditpolicyComponent } from './editpolicy/editpolicy.component';
import { SearchComponent } from './search/search.component';
import { SearchbynameComponent } from './searchbyname/searchbyname.component';
import { SearchbyidComponent } from './searchbyid/searchbyid.component';
import { SearchbydurationComponent } from './searchbyduration/searchbyduration.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [

  {path:'adminlogin',component:AdminComponent},
  {path:'userlogin',component:UserComponent},
  {path:'adminregister',component:AdminregisterComponent},
  {path:'userregister',component:UserregisterComponent},
  {path:'add',component:CreatepolicyComponent,canActivate:[AdminloginauthguardService]},
  {path:'add/add/view',component:ViewpolicyComponent,canActivate:[AdminloginauthguardService]},
  {path:'view',component:ViewpolicyComponent},
  {path:'edit',component:EditpolicyComponent},
  {path:'search',component:SearchComponent},
  {path:'searchbyname',component:SearchbynameComponent},
  {path:'searchbyid',component:SearchbyidComponent},
  {path:'searchbyduration',component:SearchbydurationComponent},
  {path:'payment',component:PaymentComponent},
  {path:'success',component:PaysuccessComponent},  
  {path:'',redirectTo:'add',pathMatch:'full'},
  {path:'user',redirectTo:'search',pathMatch:'full'},
  {path:'logoutadmin',component:LogoutadminComponent,canActivate:[AdminloginauthguardService]},
  {path:'logoutuser',component:LogoutuserComponent,canActivate:[UserloginauthguardService]}, 
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
