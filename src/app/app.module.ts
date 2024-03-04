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

@NgModule({
  declarations: [
    AppComponent,
    AddcompagnieComponent,
    ListeCompagniesComponent
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
  MatCardModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
