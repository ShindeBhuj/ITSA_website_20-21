import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScnpComponent } from './scnp/scnp.component';
import { RajComponent } from './raj/raj.component';
import { MaheshComponent } from './mahesh/mahesh.component';
import { SumeetComponent } from './sumeet/sumeet.component';
import { RakshandaComponent } from './rakshanda/rakshanda.component';
import { AshayComponent } from './ashay/ashay.component';
import { RasikaComponent } from './rasika/rasika.component';
import { VenkateshComponent } from './venkatesh/venkatesh.component';
import { AshutoshComponent } from './ashutosh/ashutosh.component';
import { GautamiComponent } from './gautami/gautami.component';

@NgModule({
  declarations: [ScnpComponent, RajComponent, MaheshComponent, SumeetComponent, RakshandaComponent, AshayComponent, RasikaComponent, VenkateshComponent, AshutoshComponent, GautamiComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	ScnpComponent,
  ],
})
export class ScnpModule { }
