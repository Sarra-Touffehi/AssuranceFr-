import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchPipe } from '../search.pipe';
import { CompteComponent } from '../components/compte/compte.component';


@NgModule({
  declarations: [
    SearchPipe,
    CompteComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SearchPipe,
    CompteComponent,
  ],
})
export class SharedModule { }
