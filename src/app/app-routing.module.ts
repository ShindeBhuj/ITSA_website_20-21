import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItsaHomeComponent } from './itsa-home/itsa-home.component';
import { EventsComponent } from './events/events.component';
import { TopComponent } from './top/top.component';
import { TeamsComponent } from './teams/teams.component';
import { LeadersComponent } from './leaders/leaders/leaders.component';
import { FinanceComponent } from './finance/finance/finance.component';
import { WntComponent } from './wnt/wnt/wnt.component';
import { NotificationComponent } from './notification/notification/notification.component';
import { EmComponent } from './em/em/em.component';
import { ScnpComponent } from './scnp/scnp/scnp.component';
import { PndComponent } from './pnd/pnd/pnd.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: ItsaHomeComponent },
    { path: 'events', component: EventsComponent },
    { path: 'top', component: TopComponent },
    { path: 'teams', redirectTo: '/teams/leaders', pathMatch: 'full' },
    { path: 'teams',
      component: TeamsComponent,
      children: [
        { path: 'leaders', component: LeadersComponent },
        { path: 'finance', component: FinanceComponent },
        { path: 'wnt', component: WntComponent },
        { path: 'notification', component: NotificationComponent },
        { path: 'em', component: EmComponent },
        { path: 'scnp', component: ScnpComponent },
        { path: 'pnd', component: PndComponent }
      ]
    },
];

@NgModule({
    exports: [ RouterModule ],
    imports: [
        RouterModule.forRoot(routes)
    ]
})
export class AppRoutingModule { }
