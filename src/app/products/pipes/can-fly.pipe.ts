import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanFlyPipe implements PipeTransform {
  transform(value: string, ...args: any[]): 'Fly' | 'No Fly' {
    return value ? 'Fly' : 'No Fly';
  }
}
