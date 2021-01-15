import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinanceComponent } from './finance/finance.component';
import { HeadComponent } from './head/head.component';
import { BeComponent } from './be/be.component';
import { ShreyakComponent } from './shreyak/shreyak.component';

@NgModule({
  declarations: [FinanceComponent, HeadComponent, BeComponent, ShreyakComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	FinanceComponent,
  ],
})
export class FinanceModule { }
