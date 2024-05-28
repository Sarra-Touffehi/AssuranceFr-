import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { AddcompagnieComponent } from './addcompagnie/addcompagnie.component';
import { ListeCompagniesComponent } from './liste-compagnies/liste-compagnies.component';
import { OffresComponent } from './offres/offres.component';
import { ChatComponent } from '../components/chat/chat.component';
import { DrawerAdminComponent } from './drawer-admin/drawer-admin.component';

const routes: Routes = [
  {path:'admin', component:HeaderAdminComponent,
 // canActivate: [AuthEmpGuard],
  children:[
    {path:'', redirectTo:'headerAdmin', pathMatch:'full'},
    {path:'headerAdmin', title:'headerAdmin',component:HeaderAdminComponent},
    {path:'ajoutcompagnie', title:'AjoutCompagnie', component:AddcompagnieComponent},
    {path:'listecompagnie', title:'ListeCompagnie', component:ListeCompagniesComponent},
    {path:'offres/:idcomp', component:OffresComponent},
    {path:'chat/:iduser', component:ChatComponent},
    {path:'drawerAdmin', component:DrawerAdminComponent},
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
