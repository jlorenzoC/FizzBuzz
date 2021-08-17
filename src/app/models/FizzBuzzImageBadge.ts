import { ImageBadge } from './ImageBadge';

export class FizzBuzzImageBadge extends ImageBadge {
  constructor(
    public fizzbuzzType: string,
    public numberProcessedByFizzBuzzAlgorithm: number,
    public imageNameAndFormat = 'FizzBuzz.png'
  ) {
    super(fizzbuzzType, numberProcessedByFizzBuzzAlgorithm, imageNameAndFormat);
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
