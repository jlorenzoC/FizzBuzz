import { FizzBuzzBaseModel } from './FizzBuzzBaseModel';

export class FizzBuzz extends FizzBuzzBaseModel {
  constructor(
    public numberProcessedByFizzBuzzAlgorithm?: number,
    public fizzbuzzType: string = 'FizzBuzz',
    public imageNameAndFormat = 'FizzBuzz.webp'
  ) {
    super(fizzbuzzType, imageNameAndFormat);
  }

  get imageAlternative(): string {
    return 'FizzBuzz techer';
  }
  get tooltip(): string {
    return `The remainder of the division of number ${this.numberProcessedByFizzBuzzAlgorithm}, by number 3 and 5, is 0`;
  }
  get badgeSeverity(): string {
    return 'success';
  }
}
