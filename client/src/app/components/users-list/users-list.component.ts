import { Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent {
  @Input() users: User[] = [];
  @Output() selectChatEmit = new EventEmitter<any>();
  activeTab: 'online' | 'all' = 'online';
  filterQuery: string;

  changeTab(tab: 'online' | 'all'): void {
    this.activeTab = tab;
  }

  onSelectChat(user: User): void {
    this.selectChatEmit.emit(user);
  }
}
