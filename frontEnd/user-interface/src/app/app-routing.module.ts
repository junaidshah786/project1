import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {UserListComponent} from './user-list/user-list.component';
const routes: Routes = [
  {path:"user/userLogin",component:LoginComponent},
  {path:"user/userRegister",component:RegisterComponent},
  {path:"user/userList",component:UserListComponent},
  {path: '', redirectTo: '/user/userLogin', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
