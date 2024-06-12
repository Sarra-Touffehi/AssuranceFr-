import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminGlobalRoutingModule } from './admin-global-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderAdminGlobalComponent } from './header-admin-global/header-admin-global.component';
import { SearchPipe } from '../search.pipe';
import { SharedModule } from '../shared/shared.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DrawerAdminGlobalComponent } from './drawer-admin-global/drawer-admin-global.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AcceuilAdminGlobalComponent } from './acceuil-admin-global/acceuil-admin-global.component';
import { CompteAdminGlobalComponent } from './compte-admin-global/compte-admin-global.component';


@NgModule({
  declarations: [
    AddUserComponent,
    ListUsersComponent,
    UpdateUserComponent,
    HeaderAdminGlobalComponent,
    SidenavComponent,
    DrawerAdminGlobalComponent,
    AcceuilAdminGlobalComponent,
    CompteAdminGlobalComponent,
  
  ],
  imports: [
    CommonModule,
    AdminGlobalRoutingModule,
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
export class AdminGlobalModule { }
