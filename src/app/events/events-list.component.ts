import { Component } from '@angular/core';
import {EventService} from "./shared/event.service";

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail #thumbnail [event]='event'></event-thumbnail>
        </div>        
      </div>
    </div>
  `,
  styles: ['.container {background-color: beige;}']
})
export class EventsListComponent {

  events: any[];

  constructor(private eventService: EventService) {
    this.events = this.eventService.getEvents();
  }
}
