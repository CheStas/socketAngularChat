import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(string: string, size: number): string {
    if (string.length > size) {
      return string.substring(0, size) + '...';
    }
    return string;
  }

}
