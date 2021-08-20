import { ImageBadge } from './ImageBadge';

export class BuzzImageBadge extends ImageBadge {
  constructor(
    public fizzbuzzType: string,
    public numberProcessedByFizzBuzzAlgorithm: number,
    public imageNameAndFormat = 'buzz.png'
  ) {
    super(fizzbuzzType, numberProcessedByFizzBuzzAlgorithm, imageNameAndFormat);
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
