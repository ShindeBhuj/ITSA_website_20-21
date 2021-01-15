import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { SanjanaComponent } from './sanjana/sanjana.component';
import { SayliComponent } from './sayli/sayli.component';
import { AniketComponent } from './aniket/aniket.component';
import { KaustubhComponent } from './kaustubh/kaustubh.component';
import { VaishnaviComponent } from './vaishnavi/vaishnavi.component';
import { SharayuComponent } from './sharayu/sharayu.component';
import { RutujaComponent } from './rutuja/rutuja.component';
import { AshwiniComponent } from './ashwini/ashwini.component';

@NgModule({
  declarations: [NotificationComponent, SanjanaComponent, SayliComponent, AniketComponent, KaustubhComponent, VaishnaviComponent, SharayuComponent, RutujaComponent, AshwiniComponent],
  imports: [
    CommonModule
  ],
  exports: [
  	NotificationComponent,
  ],
})
export class NotificationModule { }
