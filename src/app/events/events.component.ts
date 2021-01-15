import { Component } from '@angular/core';
import { EventAPIService } from '../event-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  providers: [EventAPIService]
})
export class EventsComponent{

  eventdetail = []
  constructor(private api: EventAPIService) {
  	this.getEvents();
  }
  getEvents = () => {
  	this.api.getAllEvents().subscribe(
  		data => {
  			this.eventdetail = data;
  		},
  		error => {
  			console.log(error);
  		}
  	)
  }
}
