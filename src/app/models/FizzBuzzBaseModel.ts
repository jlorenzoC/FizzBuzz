import { environment } from '../../environments/environment';
export abstract class FizzBuzzBaseModel {
  width = '50';
  height = '50';
  private pathToImageFolder = `..${environment.imagesPath}/assets/image/webp/`;
  constructor(
    public fizzbuzzType: string | number,
    public imageNameAndFormat = 'image-not-found.webp'
  ) {}

  abstract get imageAlternative(): string;

  abstract get tooltip(): string;

  abstract get badgeSeverity(): string;

  getImagePath() {
    return this.pathToImageFolder + this.imageNameAndFormat;
  }
}
