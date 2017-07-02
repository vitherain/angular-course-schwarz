import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from "../users.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
