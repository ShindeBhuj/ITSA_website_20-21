import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmComponent } from './em/em.component';
import { DeepakComponent } from './deepak/deepak.component';
import { VedantComponent } from './vedant/vedant.component';
import { AbhishekComponent } from './abhishek/abhishek.component';
import { MugdhaComponent } from './mugdha/mugdha.component';
import { TejashreeComponent } from './tejashree/tejashree.component';
import { JuiComponent } from './jui/jui.component';
import { SiddhiComponent } from './siddhi/siddhi.component';
import { BhujangraoComponent } from './bhujangrao/bhujangrao.component';
import { ShaswatComponent } from './shaswat/shaswat.component';
import { PratiksComponent } from './pratiks/pratiks.component';
import { AshwiniComponent } from './ashwini/ashwini.component';
import { SakshiComponent } from './sakshi/sakshi.component';

@NgModule({
  declarations: [EmComponent, DeepakComponent, VedantComponent, AbhishekComponent, MugdhaComponent, TejashreeComponent, JuiComponent, SiddhiComponent, BhujangraoComponent, ShaswatComponent, PratiksComponent, AshwiniComponent, SakshiComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	EmComponent,
  ],
})
export class EmModule { }
