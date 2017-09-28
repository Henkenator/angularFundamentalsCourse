import {Component, OnInit} from '@angular/core';
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toastr.service";

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming events</h1>
      <hr/>
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail #thumbnail (click)="handleThumbnailClick(event.name)" [event]='event'></event-thumbnail>
        </div>        
      </div>
    </div>
  `,
  styles: ['.container {background-color: beige;}']
})
export class EventsListComponent implements OnInit{

  events: any[];

  constructor(private eventService: EventService,
              private toastrService: ToastrService) {

  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailClick(eventName) {
    this.toastrService.success('Hello ', eventName);
  }
}