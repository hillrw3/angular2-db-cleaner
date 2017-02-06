import {Component, OnInit} from '@angular/core'
import {UsersService} from "./users.service";
import {User} from "../models/user";

@Component({
  selector: 'users',
  providers: [UsersService],
  templateUrl: './users.component.html',
})

export class UsersComponent implements OnInit {
  users: User[];

  constructor(private service: UsersService) {}

  ngOnInit() {
    this.getUsers()
  }

  getUsers(): void {
    this.service.getUsers().then(users => this.users = users)
  }

}
