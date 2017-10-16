/**
 * Created by Henke on 2017-10-16.
 */

import {Routes} from '@angular/router';
import {ProfileComponent} from './profile/profile.component';
import {LoginComponent} from './login.component';
export const userRoutes: Routes = [
  {path: 'profile', component: ProfileComponent},
  {path: 'login', component: LoginComponent}
  ];

