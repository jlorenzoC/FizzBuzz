import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areAllTheNumbersProcessed',
})
export class AreAllTheNumbersProcessedPipe implements PipeTransform {
  transform(value: number, hasToBe: number): boolean {
    return value === hasToBe;
  }
}
