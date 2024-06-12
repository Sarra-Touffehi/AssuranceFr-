import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminGlobalComponent } from './header-admin-global/header-admin-global.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ChatComponent } from '../components/chat/chat.component';
import { DrawerAdminGlobalComponent } from './drawer-admin-global/drawer-admin-global.component';
import { AcceuilAdminGlobalComponent } from './acceuil-admin-global/acceuil-admin-global.component';
import { AuthGuard } from '../guards/auth.guard';
import { CompteAdminGlobalComponent } from './compte-admin-global/compte-admin-global.component';

const routes: Routes = [
  {path:'admin-global', component:DrawerAdminGlobalComponent,
  canActivate: [AuthGuard],
   children:[
     {path:'', redirectTo:'drawerAdminG', pathMatch:'full'},
     {path:'headerAdminGlobal', title:'headerAdminGlobal',component:HeaderAdminGlobalComponent},
     {path:'adduser', title:'adduser', component:AddUserComponent},
     {path:'listusers', title:'listusers', component:ListUsersComponent},
     {path:'chat/:iduser', component:ChatComponent},
     {path:'drawerAdminG', component:DrawerAdminGlobalComponent},
     {path:'accueilAdminGlobal', component:AcceuilAdminGlobalComponent},
     {path:'compteadminglobal', title:'compteadminglobal', component:CompteAdminGlobalComponent},

   ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminGlobalRoutingModule { }
