import { FizzBuzzBaseModel } from './FizzBuzzBaseModel';

export class Buzz extends FizzBuzzBaseModel {
  constructor(
    public numberProcessedByFizzBuzzAlgorithm: number,
    public fizzbuzzType: string = 'Buzz',
    public imageNameAndFormat = 'buzz.webp'
  ) {
    super(fizzbuzzType, imageNameAndFormat);
  }
  get imageAlternative(): string {
    return 'Buzz Lightyear';
  }
  get tooltip(): string {
    return `The remainder of the division of number ${this.numberProcessedByFizzBuzzAlgorithm}, by number 5, is 0`;
  }
  get badgeSeverity(): string {
    return 'info';
  }
}
