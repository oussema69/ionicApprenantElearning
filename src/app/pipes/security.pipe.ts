import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'security'
})
export class SecurityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
