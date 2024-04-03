import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'activeWordMayus',
  standalone: true
})
export class ActiveWordMayusPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const active = args[0];
    const myValue = value as string;
    return active ? myValue.toUpperCase() : myValue.toLowerCase();
  }

}
