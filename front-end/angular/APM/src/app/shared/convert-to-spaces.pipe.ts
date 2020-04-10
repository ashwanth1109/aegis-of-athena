import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: any, ...args): any {
    const [character] = args;
    return value.replace(character, ' ');
  }
}
