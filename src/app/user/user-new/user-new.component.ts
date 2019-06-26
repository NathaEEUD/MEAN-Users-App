import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-new',
  templateUrl: './user-new.component.html',
  styleUrls: ['./user-new.component.css']
})
export class UserNewComponent implements OnInit {
  // create an event emitter to send the new user to parent component
  @Output() createNewUserEvent = new EventEmitter();
  newUser: User = new User;

  constructor() { }

  ngOnInit() {
  }

  create() {
    // call the server to save
    this.createNewUserEvent.emit(this.newUser);
    // create a new instance of the user to clean newUser
    this.newUser = new User;
  }
}
