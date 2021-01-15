import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PndComponent } from './pnd/pnd.component';
import { ShashankComponent } from './shashank/shashank.component';
import { SaurabhComponent } from './saurabh/saurabh.component';
import { AdityaComponent } from './aditya/aditya.component';
import { VishalComponent } from './vishal/vishal.component';
import { KaushalComponent } from './kaushal/kaushal.component';
import { MehulComponent } from './mehul/mehul.component';

@NgModule({
  declarations: [PndComponent, ShashankComponent, SaurabhComponent, AdityaComponent, VishalComponent, KaushalComponent, MehulComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	PndComponent,
  ],
})
export class PndModule { }
