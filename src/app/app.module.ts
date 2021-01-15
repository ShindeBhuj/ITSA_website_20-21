import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { LeadersModule } from './leaders/leaders.module';
import { FinanceModule } from './finance/finance.module';
import { WntModule } from './wnt/wnt.module';
import { NotificationModule } from './notification/notification.module';
import { EmModule } from './em/em.module';
import { ScnpModule } from './scnp/scnp.module';
import { PndModule } from './pnd/pnd.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ItsaHomeComponent } from './itsa-home/itsa-home.component';
import { EventsComponent } from './events/events.component';
import { TechnicalComponent } from './technical/technical.component';
import { NontechnicalComponent } from './nontechnical/nontechnical.component';
import { TopComponent } from './top/top.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
declarations: [
    AppComponent,
    ItsaHomeComponent,
    EventsComponent,
    TechnicalComponent,
    NontechnicalComponent,
    TopComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    LeadersModule,
    FinanceModule,
    WntModule,
    NotificationModule,
    EmModule,
    ScnpModule,
    PndModule,
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
