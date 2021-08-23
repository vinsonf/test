import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-search-list',
  templateUrl: './users-search-list.component.html',
  styleUrls: ['./users-search-list.component.scss']
})
export class UsersSearchListComponent implements OnInit {
  searchTerm: string = '';

  constructor(private usersService: UsersService) { }


  ngOnInit(): void {
  }

  get users() {
    return this.usersService.filter(this.searchTerm);
  }

  deleteUser(user: User) {
    this.usersService.removeUser(user.username);
  }

}
