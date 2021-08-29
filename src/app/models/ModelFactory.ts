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
    let imageBadge: FizzBuzzBaseModel = new NonFizzBuzz();
    switch (numberType) {
      case 'Fizz':
        imageBadge = new Fizz(numberProcessed);
        break;
      case 'Buzz':
        imageBadge = new Buzz(numberProcessed);
        break;
      case 'FizzBuzz':
        imageBadge = new FizzBuzz(numberProcessed);
        break;
      default:
        break;
    }
    return imageBadge;
  }
}
