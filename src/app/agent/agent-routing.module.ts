import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContratComponent } from './contrat/contrat.component';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';
import { ListeSouscriptionsComponent } from './liste-souscriptions/liste-souscriptions.component';
import { SimulationComponent } from './simulation/simulation.component';
import { SouscriptionComponent } from './souscription/souscription.component';
import { ValiderSouscriptionComponent } from './valider-souscription/valider-souscription.component';

const routes: Routes = [
  {path:'agent', component:HeaderComponent,
  // canActivate: [AuthEmpGuard],
   children:[
     {path:'', redirectTo:'header', pathMatch:'full'},
     {path:'header',component:HeaderComponent},
     {path:'simulation', title:'simulation', component:SimulationComponent},
     {path:'souscription', title:'souscription', component:SouscriptionComponent},
     {path:'listsouscriptions', title:'listsouscriptions', component:ListeSouscriptionsComponent},
     {path:'validerSousc', title:'validerSousc', component:ValiderSouscriptionComponent},
     {path:'contrat', title:'contrat', component:ContratComponent},
     {path:'listeContrats', title:'listeContrats', component:ListeContratsComponent},
   ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
