import { Buzz } from './Buzz';
import { FizzBuzz } from './FizzBuzz';
import { Fizz } from './Fizz';
import { FizzBuzzBaseModel } from './FizzBuzzBaseModel';
import { NonFizzBuzz } from './NonFizzzBuzz';

export class ModelFactory {
  getModel(
    numberType: string,
    numberProcessed: number = -1
  ): FizzBuzzBaseModel {
    let imageBadge!: FizzBuzzBaseModel;
    switch (numberType) {
      case 'Fizz':
        imageBadge = new Fizz(numberType, numberProcessed);
        break;
      case 'Buzz':
        imageBadge = new Buzz(numberType, numberProcessed);
        break;
      case 'FizzBuzz':
        imageBadge = new FizzBuzz(numberType, numberProcessed);
        break;
      case 'They are not':
        imageBadge = new NonFizzBuzz();
        break;
    }
    return imageBadge;
  }
}
