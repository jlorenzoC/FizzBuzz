import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModelFactory } from 'src/app/models/ModelFactory';

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
        transform: translate(80px, -35px);
      }
      .Fizz {
        height: 100px;
        transform: translate(80px, -10px);
      }
      .FizzBuzz {
        height: 60px;
        transform: translate(55px, 10px);
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
  imageBadgeFactory = new ModelFactory();
  @Input() set fizzbuzzType(input: { type: string; number: number }) {
    this.imageBadge = this.imageBadgeFactory.getModel(input.type, input.number);
  }
}
