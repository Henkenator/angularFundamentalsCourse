import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EventsListComponent} from './events/events-list.component';
import {EventThumbnailComponent} from './events/event-thumbnail.component';
import {NavbarComponent} from './nav/navbar.component';
import {EventService} from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './routes';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/error404/error404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventsListResolverService} from './events/shared/events-list-resolver.service';
import {AuthService} from './user/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CreateSessionComponent } from './events/event-details/create-session/create-session.component';
import { SessionListComponent } from './events/event-details/session-list/session-list.component';
import {CollapsibleWellComponent} from './common/collapsible-well.component';
import {DurationPipe} from './events/shared/duration.pipe';
import {Toastr, TOASTR_TOKEN} from './common/toastr.service';
import { JQ_TOKEN, SimpleModalComponent} from './common/index';
import {UpvoteComponent} from './events/event-details/upvote.component';
import {VoterService} from './events/event-details/voter.service';
import {LocationValidator} from './events/location-validator.directive';

//declare let toastr: Toastr;
declare let jQuery: Object;

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe,
    SimpleModalComponent,
    UpvoteComponent,
    LocationValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    EventRouteActivator,
    EventsListResolverService,
  /*  {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },{
      provide: JQ_TOKEN,
      useValue: jQuery
    },*/
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    AuthService,
    VoterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved. Wanna cancel anyway?');
  }
  return true;

}
