import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'filterUserByName'
})
export class FilterUserByNamePipe implements PipeTransform {

  transform(users: User[], query: string): User[] {
    if (query) {
      return users.filter(el => el.name.toLowerCase().includes(query.toLowerCase()));
    }
    return users;
  }

}
