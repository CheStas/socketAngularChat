import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'isUserOnline',
})
export class IsUserOnlinePipe implements PipeTransform {

  transform(users: User[], activeTab: 'online' | 'all'): User[] {
    if (activeTab === 'online') {
      return users.filter(el => el.isActive);
    }
    return users;
  }

}
