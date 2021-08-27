import { FizzBuzzBaseModel } from 'src/app/models/FizzBuzzBaseModel';
export class NonFizzBuzz extends FizzBuzzBaseModel {
  constructor(public fizzbuzzType: string = 'They are not') {
    super(fizzbuzzType, 'neutral.png');
  }
  get imageAlternative(): string {
    return 'neutral emoji';
  }
  get tooltip(): string {
    return 'Element non-FizzBuzz typed';
  }
  get badgeSeverity(): string {
    return 'danger';
  }
}
