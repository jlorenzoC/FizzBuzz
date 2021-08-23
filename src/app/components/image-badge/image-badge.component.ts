import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BuzzImageBadge } from 'src/app/models/BuzzImageBadge';
import { FizzBuzzImageBadge } from 'src/app/models/FizzBuzzImageBadge';
import { FizzImageBadge } from 'src/app/models/FizzImageBadge';
import { ImageBadge } from './../../models/ImageBadge';

@Component({
  selector: 'app-image-badge',
  template: `
    <div class="flex justify-content-between" *ngIf="imageBadge">
      <img
        [src]="imageBadge.getImagePath()"
        [alt]="imageBadge.imageAlternative"
        [class]="imageBadge.fizzbuzzType"
      />
      <p-badge
        [value]="imageBadge.fizzbuzzType.toString()"
        [pTooltip]="imageBadge.tooltip"
        [severity]="imageBadge.badgeSeverity"
        class="cursor-pointer margin-top"
      ></p-badge>
    </div>
  `,
  styles: [
    `
      .Buzz {
        height: 150px;
        transform: translate(80px, -45px);
      }
      .Fizz {
        height: 100px;
        transform: translate(80px, -18px);
      }
      .FizzBuzz {
        height: 60px;
        transform: translate(55px, 0);
      }
      .margin-top {
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageBadgeComponent {
  imageBadge!: ImageBadge;
  @Input() set fizzbuzzType(input: { type: string; number: number }) {
    switch (input.type) {
      case 'Fizz':
        this.imageBadge = new FizzImageBadge(input.type, input.number);
        break;
      case 'Buzz':
        this.imageBadge = new BuzzImageBadge(input.type, input.number);
        break;
      case 'FizzBuzz':
        this.imageBadge = new FizzBuzzImageBadge(input.type, input.number);
        break;
    }
  }
}
