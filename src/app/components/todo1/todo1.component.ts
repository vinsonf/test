import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo1',
  templateUrl: './todo1.component.html',
  styleUrls: ['./todo1.component.scss']
})
export class Todo1Component {

  title = 'test';
  myArray = ['a', 'b', 'c'];
  users = [
    {name: 'User1'},
    {name: 'User2'}
  ];

  addToArray() {
    this.myArray.push(this.title);
  }
  addToUsers() {
    this.users.push({name: this.title});
  }

  get isViewable() {
    return this.title === 'test1';
  }


}
