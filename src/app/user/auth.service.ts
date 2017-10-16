import {Injectable} from '@angular/core';
import {IUser} from './user.model';
/**
 * Created by Henke on 2017-10-16.
 */


@Injectable()
export class AuthService {

  currentUser: IUser;

  loginUser(userName: string,  password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'Henrik',
      lastName: 'Ljunggren'
    };
    console.log(this.currentUser);
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateUser(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;

  }
}
