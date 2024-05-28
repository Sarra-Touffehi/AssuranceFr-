import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminGlobalComponent } from './header-admin-global/header-admin-global.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ChatComponent } from '../components/chat/chat.component';
import { DrawerAdminGlobalComponent } from './drawer-admin-global/drawer-admin-global.component';

const routes: Routes = [
  {path:'admin-global', component:DrawerAdminGlobalComponent,
  // canActivate: [AuthEmpGuard],
   children:[
     {path:'', redirectTo:'drawerAdminG', pathMatch:'full'},
     {path:'headerAdminGlobal', title:'headerAdminGlobal',component:HeaderAdminGlobalComponent},
     {path:'adduser', title:'adduser', component:AddUserComponent},
     {path:'listusers', title:'listusers', component:ListUsersComponent},
     {path:'chat/:iduser', component:ChatComponent},
     {path:'drawerAdminG', component:DrawerAdminGlobalComponent},

   ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminGlobalRoutingModule { }
