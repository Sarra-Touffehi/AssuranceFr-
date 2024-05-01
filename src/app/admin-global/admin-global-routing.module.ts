import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminGlobalComponent } from './header-admin-global/header-admin-global.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ChatComponent } from '../components/chat/chat.component';

const routes: Routes = [
  {path:'admin-global', component:HeaderAdminGlobalComponent,
  // canActivate: [AuthEmpGuard],
   children:[
     {path:'', redirectTo:'headerAdmin', pathMatch:'full'},
     {path:'headerAdminGlobal', title:'headerAdminGlobal',component:HeaderAdminGlobalComponent},
     {path:'adduser', title:'adduser', component:AddUserComponent},
     {path:'listusers', title:'listusers', component:ListUsersComponent},
     {path:'chat/:iduser', component:ChatComponent},
   ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminGlobalRoutingModule { }
