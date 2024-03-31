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

const routes: Routes = [
{path:'ajoutcompagnie', title:'AjoutCompagnie', component:AddcompagnieComponent},
{path:'listecompagnie', title:'ListeCompagnie', component:ListeCompagniesComponent},
{path:'offres/:idcomp', component:OffresComponent},
{path:'souscrire',component:SouscriptionComponent},
{path:'header',component:HeaderComponent},
{path:'simulation', title:'simulation', component:SimulationComponent},
{path:'souscription', title:'souscription', component:SouscriptionComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
