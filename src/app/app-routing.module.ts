import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { LoginComponent } from './login/login.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { UseSocketComponent } from './use-socket/use-socket.component';


const routes: Routes = [
  { path : 'register', component : RegisterComponent},
  { path : 'mnguser', component : ManageusersComponent},
  { path : 'login', component : LoginComponent},
  { path : 'userdash', component : UserdashboardComponent},
  { path : 'socket', component : UseSocketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
