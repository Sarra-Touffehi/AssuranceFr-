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
import { AddcompagnieComponent } from './components/addcompagnie/addcompagnie.component';
import { HttpClientModule } from '@angular/common/http';
import { ListeCompagniesComponent } from './components/liste-compagnies/liste-compagnies.component';
import { MatDialogRef } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OffresComponent } from './components/offres/offres.component';
import { AddOffreComponent } from './components/add-offre/add-offre.component';
import { SouscriptionComponent } from './components/souscription/souscription.component';
import { UpdateOffreComponent } from './components/update-offre/update-offre.component';
import { MatSelectModule } from '@angular/material/select';
import { SimulationComponent } from './components/simulation/simulation.component';
import { TarificationComponent } from './components/tarification/tarification.component';
import { AddUserComponent } from './components/add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    AddcompagnieComponent,
    ListeCompagniesComponent,
    HeaderComponent,
    FooterComponent,
    OffresComponent,
    AddOffreComponent,
    SouscriptionComponent,
    UpdateOffreComponent,
    SimulationComponent,
    TarificationComponent,
    AddUserComponent
  
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
  MatSelectModule
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
