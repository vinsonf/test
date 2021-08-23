import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public users: User[] = [];
  constructor() { }
  addUser(username: string, password: string) {
    this.users.push(new User(username, password));
  }

  filter(username: string) {
    return this.users.filter((user) => user.username.includes(username))
  }

  removeUser(username: string) {
    this.users = this.users.filter(user => user.username !== username)
  }
}
