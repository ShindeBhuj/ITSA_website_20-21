import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadersComponent } from './leaders/leaders.component';
import { GSComponent } from './gs/gs.component';
import { AGSComponent } from './ags/ags.component';

@NgModule({
  declarations: [LeadersComponent, GSComponent, AGSComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	LeadersComponent,
  ]
})
export class LeadersModule { }
