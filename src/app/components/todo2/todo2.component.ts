import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo2',
  templateUrl: './todo2.component.html',
  styleUrls: ['./todo2.component.scss']
})
export class Todo2Component  {
  items : string[] = [];
  title = '';

  addTodo() {
    this.items.push(this.title);
  }

}
