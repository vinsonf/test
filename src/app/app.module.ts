import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Todo1Component } from './components/todo1/todo1.component';
import { Todo2Component } from './components/todo2/todo2.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersSearchListComponent } from './components/users-search-list/users-search-list.component';

@NgModule({
  declarations: [
    AppComponent,
    Todo1Component,
    Todo2Component,
    AddUserComponent,
    UsersListComponent,
    UsersSearchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
