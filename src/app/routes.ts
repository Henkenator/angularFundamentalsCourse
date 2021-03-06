import {EventsListComponent} from './events/events-list.component';
import {EventDetailsComponent} from './events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {CreateEventComponent} from './events/create-event/create-event.component';
import {Error404Component} from './errors/error404/error404.component';
import {EventRouteActivator} from './events/event-details/event-route-activator.service';
import {EventsListResolverService} from './events/shared/events-list-resolver.service';
import {CreateSessionComponent} from './events/event-details/create-session/create-session.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolverService} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]
