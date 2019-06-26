import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users;
  @Output() deleteUserEvent = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  delete(user: User) {
    const response = confirm('Are you sure to delete this user?');
    if (response) {
      this.deleteUserEvent.emit(user);
    }
  }
}
