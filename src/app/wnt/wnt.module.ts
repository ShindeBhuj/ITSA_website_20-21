import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WntComponent } from './wnt/wnt.component';
import { HeadComponent } from './head/head.component';
import { VishalComponent } from './vishal/vishal.component';
import { PrachiComponent } from './prachi/prachi.component';
import { AjayComponent } from './ajay/ajay.component';
import { DeepakComponent } from './deepak/deepak.component';
import { SushantComponent } from './sushant/sushant.component';
import { ShreyamComponent } from './shreyam/shreyam.component';
import { ShreyakComponent } from './shreyak/shreyak.component';
import { PriyaComponent } from './priya/priya.component';
import { RiyaComponent } from './riya/riya.component';
import { MahimaComponent } from './mahima/mahima.component';
import { PranavComponent } from './pranav/pranav.component';
import { MaitreyaComponent } from './maitreya/maitreya.component';

@NgModule({
  declarations: [WntComponent, HeadComponent, VishalComponent, PrachiComponent, AjayComponent, DeepakComponent, SushantComponent, ShreyamComponent, ShreyakComponent, PriyaComponent, RiyaComponent, MahimaComponent, PranavComponent, MaitreyaComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	WntComponent,
  ]
})
export class WntModule { }
