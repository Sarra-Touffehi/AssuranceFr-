import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContratComponent } from './contrat/contrat.component';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';
import { ListeSouscriptionsComponent } from './liste-souscriptions/liste-souscriptions.component';
import { SimulationComponent } from './simulation/simulation.component';
import { SouscriptionComponent } from './souscription/souscription.component';
import { ValiderSouscriptionComponent } from './valider-souscription/valider-souscription.component';
import { ChatComponent } from '../components/chat/chat.component';
import { DrawerComponent } from './drawer/drawer.component';
import { AcceuilAgentComponent } from './acceuil-agent/acceuil-agent.component';
import { AuthGuard } from '../guards/auth.guard';
import { CompteAgentComponent } from './compte-agent/compte-agent.component';

const routes: Routes = [
  {path:'agent', component:DrawerComponent,
  canActivate: [AuthGuard],
   children:[
     {path:'', redirectTo:'drawer', pathMatch:'full'},
     {path:'header',component:HeaderComponent},
     {path:'simulation', title:'simulation', component:SimulationComponent},
     {path:'souscription', title:'souscription', component:SouscriptionComponent},
     {path:'listsouscriptions', title:'listsouscriptions', component:ListeSouscriptionsComponent},
     {path:'validerSousc', title:'validerSousc', component:ValiderSouscriptionComponent},
     {path:'contrat', title:'contrat', component:ContratComponent},
     {path:'listeContrats', title:'listeContrats', component:ListeContratsComponent},
     {path:'chat/:iduser', component:ChatComponent},
     {path:'drawer',title :'drawer' , component:DrawerComponent},
     {path:'accueilAgent', component:AcceuilAgentComponent},
     {path:'agentcompte',title :'agentcompte' , component:CompteAgentComponent},

     
   ]
 },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
