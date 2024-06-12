import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddcompagnieComponent } from './admin/addcompagnie/addcompagnie.component';
import { ListeCompagniesComponent } from './admin/liste-compagnies/liste-compagnies.component';
import { OffresComponent } from './admin/offres/offres.component';
import { AddOffreComponent } from './admin/add-offre/add-offre.component';
import { SouscriptionComponent } from './agent/souscription/souscription.component';
import { HeaderComponent } from './agent/header/header.component';
import { SimulationComponent } from './agent/simulation/simulation.component';
import { AddUserComponent } from './admin-global/add-user/add-user.component';
import { ListUsersComponent } from './admin-global/list-users/list-users.component';
import { ListeSouscriptionsComponent } from './agent/liste-souscriptions/liste-souscriptions.component';
import { ValiderSouscriptionComponent } from './agent/valider-souscription/valider-souscription.component';
import { ContratComponent } from './agent/contrat/contrat.component';
import { ListeContratsComponent } from './agent/liste-contrats/liste-contrats.component';
import { CompteComponent } from './components/compte/compte.component';
import { HeaderAdminComponent } from './admin/header-admin/header-admin.component';
import { HeaderAdminGlobalComponent } from './admin-global/header-admin-global/header-admin-global.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { DrawerComponent } from './agent/drawer/drawer.component';
import { DrawerAdminComponent } from './admin/drawer-admin/drawer-admin.component';
import { DrawerAdminGlobalComponent } from './admin-global/drawer-admin-global/drawer-admin-global.component';
import { AcceuilComponent } from './admin/acceuil/acceuil.component';
import { AcceuilAdminGlobalComponent } from './admin-global/acceuil-admin-global/acceuil-admin-global.component';
import { AcceuilAgentComponent } from './agent/acceuil-agent/acceuil-agent.component';
import { ListSouscriptionsComponent } from './admin/list-souscriptions/list-souscriptions.component';
import { ListContratsComponent } from './admin/list-contrats/list-contrats.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CompteAgentComponent } from './agent/compte-agent/compte-agent.component';
import { CompteAdminComponent } from './admin/compte-admin/compte-admin.component';
import { CompteAdminGlobalComponent } from './admin-global/compte-admin-global/compte-admin-global.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{path:'ajoutcompagnie', title:'AjoutCompagnie', component:AddcompagnieComponent},
{path:'listecompagnie', title:'ListeCompagnie', component:ListeCompagniesComponent},
{path:'offres/:idcomp', component:OffresComponent},
{path:'souscrire',component:SouscriptionComponent},
{path:'header',component:HeaderComponent},
{path:'simulation', title:'simulation', component:SimulationComponent},
{path:'souscription', title:'souscription', component:SouscriptionComponent},
{path:'adduser', title:'adduser', component:AddUserComponent},
{path:'listusers', title:'listusers', component:ListUsersComponent},
{path:'listsouscriptions', title:'listsouscriptions', component:ListeSouscriptionsComponent},
{path:'validerSousc', title:'validerSousc', component:ValiderSouscriptionComponent},
{path:'contrat', title:'contrat', component:ContratComponent},
{path:'listeContrats', title:'listeContrats', component:ListeContratsComponent},
{path:'userAccount', title:'userAccount', component:CompteComponent},
{path:'headerAdmin', title:'headerAdmin', component:HeaderAdminComponent},
{path:'headerAdminGlobal', title:'headerAdminGlobal',component:HeaderAdminGlobalComponent},
{path:'chat/:iduser', component:ChatComponent},
{path:'drawer',title :'drawer' , component:DrawerComponent},
{path:'drawerAdmin', component:DrawerAdminComponent},
{path:'drawerAdminG', component:DrawerAdminGlobalComponent},
{path:'accueilAdmin', component:AcceuilComponent},
{path:'accueilAgent', component:AcceuilAgentComponent},
{path:'accueilAdminGlobal', component:AcceuilAdminGlobalComponent},
{path:'listSouscriptionsAdmin', title:'listSouscriptionsAdmin', component:ListSouscriptionsComponent},
    {path:'listContratsAdmin', title:'listContratsAdmin', component:ListContratsComponent},
    {path:'dashboard', title:'dashboard', component:DashboardComponent},
    {path:'agentcompte',title :'agentcompte' , component:CompteAgentComponent},
    {path:'compteadmin', title:'compteadmin', component:CompteAdminComponent},
    {path:'compteadminglobal', title:'compteadminglobal', component:CompteAdminGlobalComponent},



    /*{
  path :'admin',
  canActivate : [AuthGuard],
  loadChildren: () =>
    import('./admin/admin.module').then((m)=>m.AdminModule)
},
{
  path :'agent',
  canActivate : [AuthGuard],
  loadChildren: () =>
    import('./agent/agent.module').then((m)=>m.AgentModule)
},
{
  path :'admin_global',
  canActivate : [AuthGuard],
  loadChildren: () =>
    import('./admin-global/admin-global.module').then((m)=>m.AdminGlobalModule)
}
*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
