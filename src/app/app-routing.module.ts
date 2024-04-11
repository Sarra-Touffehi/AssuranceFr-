import { NgModule } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddcompagnieComponent } from './components/addcompagnie/addcompagnie.component';
import { ListeCompagniesComponent } from './components/liste-compagnies/liste-compagnies.component';
import { OffresComponent } from './components/offres/offres.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { SouscriptionComponent } from './components/souscription/souscription.component';
import { HeaderComponent } from './components/header/header.component';
import { SimulationComponent } from './components/simulation/simulation.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { LoginComponent } from './components/login/login.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
