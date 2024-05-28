import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import  {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { AddcompagnieComponent } from './admin/addcompagnie/addcompagnie.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeCompagniesComponent } from './admin/liste-compagnies/liste-compagnies.component';
import { MatDialogRef } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './agent/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OffresComponent } from './admin/offres/offres.component';
import { AddOffreComponent } from './admin/add-offre/add-offre.component';
import { SouscriptionComponent } from './agent/souscription/souscription.component';
import { UpdateOffreComponent } from './admin/update-offre/update-offre.component';
import { MatSelectModule } from '@angular/material/select';
import { SimulationComponent } from './agent/simulation/simulation.component';
import { TarificationComponent } from './agent/tarification/tarification.component';
import { AddUserComponent } from './admin-global/add-user/add-user.component';
import { ListUsersComponent } from './admin-global/list-users/list-users.component';
import { UpdateUserComponent } from './admin-global/update-user/update-user.component';
import { ListeSouscriptionsComponent } from './agent/liste-souscriptions/liste-souscriptions.component';
import { ValiderSouscriptionComponent } from './agent/valider-souscription/valider-souscription.component';
import { ContratComponent } from './agent/contrat/contrat.component';
import { NgxPrintModule } from 'ngx-print';
import { ListeContratsComponent } from './agent/liste-contrats/liste-contrats.component';
import { CompteComponent } from './components/compte/compte.component';
import { SearchPipe } from './search.pipe';
import { AdminModule } from './admin/admin.module';
import { AdminGlobalModule } from './admin-global/admin-global.module';
import { AgentModule } from './agent/agent.module';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from './shared/shared.module';
import { ChatComponent } from './components/chat/chat.component';
import { NgxPrintDirective } from 'ngx-print';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,

   // CompteComponent,
   
    LoginComponent,
    ChatComponent,
   
   
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  NgxPrintModule,
  SharedModule,
  MatMenuModule,
  MatDividerModule,
  //AdminModule,
  //AgentModule,
  //AdminGlobalModule
  
  
  ],


  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
