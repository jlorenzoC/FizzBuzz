import { environment } from './../../environments/environment';
export abstract class ImageBadge {
  private pathToImageFolder = `..${environment.imagesPath}/assets/image/`;
  constructor(
    public fizzbuzzType: string | number,
    public numberProcessedByFizzBuzzAlgorithm: number,
    public imageNameAndFormat = 'image-not-found.png'
  ) {}

  abstract get imageAlternative(): string;

  abstract get tooltip(): string;

  abstract get badgeSeverity(): string;

  getImagePath() {
    return this.pathToImageFolder + this.imageNameAndFormat;
  }
}
