import { Component, Input } from '@angular/core';
import { User } from '../../../models/user';

@Component({
  selector: 'user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent {
  @Input() user: User;
  isActive: true;
}
