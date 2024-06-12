import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgentRoutingModule } from './agent-routing.module';
import { SearchPipe } from '../search.pipe';
import { ContratComponent } from './contrat/contrat.component';
import { ListeContratsComponent } from './liste-contrats/liste-contrats.component';
import { ListeSouscriptionsComponent } from './liste-souscriptions/liste-souscriptions.component';
import { SimulationComponent } from './simulation/simulation.component';
import { SouscriptionComponent } from './souscription/souscription.component';
import { TarificationComponent } from './tarification/tarification.component';
import { ValiderSouscriptionComponent } from './valider-souscription/valider-souscription.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import  {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { NgxPrintModule } from 'ngx-print';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DrawerComponent } from './drawer/drawer.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AcceuilAgentComponent } from './acceuil-agent/acceuil-agent.component';
import { CompteAgentComponent } from './compte-agent/compte-agent.component';
@NgModule({
  declarations: [
    SouscriptionComponent,
    
    SimulationComponent,
    TarificationComponent,
    ListeSouscriptionsComponent,
    ValiderSouscriptionComponent,
    ContratComponent,
    ListeContratsComponent,
   HeaderComponent,
   SidenavComponent,
   DrawerComponent,
   AcceuilAgentComponent,
   CompteAgentComponent,
    
  ],
  imports: [
    CommonModule,
    AgentRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    NgxPrintModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
  SharedModule,
  MatMenuModule,
  MatDividerModule,
  ]
})
export class AgentModule { }
