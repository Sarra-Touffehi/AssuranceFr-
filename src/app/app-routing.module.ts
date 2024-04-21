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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
