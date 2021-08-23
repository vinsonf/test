import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  addUser() {
    this.usersService.addUser(this.username, this.password);
  }
}
