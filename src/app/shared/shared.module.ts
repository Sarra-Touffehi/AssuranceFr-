import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SearchPipe } from '../search.pipe';
import { CompteComponent } from '../components/compte/compte.component';
import { FooterComponent } from '../components/footer/footer.component';


@NgModule({
  declarations: [
    SearchPipe,
    CompteComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SearchPipe,
    CompteComponent,
    FooterComponent
  ],
})
export class SharedModule { }
