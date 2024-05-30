import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { AddcompagnieComponent } from './addcompagnie/addcompagnie.component';
import { ListeCompagniesComponent } from './liste-compagnies/liste-compagnies.component';
import { OffresComponent } from './offres/offres.component';
import { AddOffreComponent } from './add-offre/add-offre.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import  {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { UpdateOffreComponent } from './update-offre/update-offre.component';
import { SharedModule } from '../shared/shared.module';
import { DrawerAdminComponent } from './drawer-admin/drawer-admin.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AcceuilComponent } from './acceuil/acceuil.component';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    AddcompagnieComponent,
    ListeCompagniesComponent,
    OffresComponent,
    AddOffreComponent,
    UpdateOffreComponent,
    DrawerAdminComponent,
    SidenavComponent,
    AcceuilComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
  SharedModule,
  MatMenuModule,
  MatDividerModule,
  ]
})
export class AdminModule { }
