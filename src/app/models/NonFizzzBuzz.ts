import { FizzBuzzBaseModel } from 'src/app/models/FizzBuzzBaseModel';
export class NonFizzBuzz extends FizzBuzzBaseModel {
  constructor(public fizzbuzzType: string = 'I am not') {
    super(fizzbuzzType, 'neutral.webp');
  }
  get imageAlternative(): string {
    return 'neutral emoji';
  }
  get tooltip(): string {
    return 'Non-FizzBuzz';
  }
  get badgeSeverity(): string {
    return 'danger';
  }
}
