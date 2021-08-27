import { FizzBuzzBaseModel } from './FizzBuzzBaseModel';

export class Fizz extends FizzBuzzBaseModel {
  constructor(
    public fizzbuzzType: string,
    public numberProcessedByFizzBuzzAlgorithm: number,
    public imageNameAndFormat = 'fizz.png'
  ) {
    super(fizzbuzzType, imageNameAndFormat);
  }

  get imageAlternative(): string {
    return 'Fizz drink';
  }
  get tooltip(): string {
    return `The remainder of the division of number ${this.numberProcessedByFizzBuzzAlgorithm}, by number 3, is 0`;
  }
  get badgeSeverity(): string {
    return 'warning';
  }
}
