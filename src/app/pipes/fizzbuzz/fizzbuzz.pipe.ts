import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fizzbuzz',
})
export class FizzbuzzPipe implements PipeTransform {
  transform(value: number, retornaElNumero?: boolean): number | string {
    let fizzBuzz = '';
    fizzBuzz += this.getFizz(value) + this.getBuzz(value);
    return fizzBuzz.length ? fizzBuzz : retornaElNumero ? value : '';
  }

  private getFizz(value: number): string {
    return value % 3 === 0 ? 'Fizz' : '';
  }

  private getBuzz(value: number): string {
    return value % 5 === 0 ? 'Buzz' : '';
  }
}
