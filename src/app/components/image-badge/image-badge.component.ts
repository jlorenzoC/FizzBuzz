import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ImageBadge } from './../../models/ImageBadge';

@Component({
  selector: 'app-image-badge',
  template: `
    <div class="flex justify-content-between">
      <img
        *ngIf="imageBadge.show"
        [src]="imageBadge.imageSource"
        [alt]="imageBadge.imageAlternative"
        [class]="imageBadge.cssClassName"
      />
      <p-badge
        *ngIf="imageBadge.show"
        [value]="imageBadge.badgeValue"
        [pTooltip]="imageBadge.toolTip"
        [severity]="imageBadge.badgeSeverity"
        class="cursor-pointer margin-top"
      ></p-badge>
    </div>
  `,
  styles: [
    `
      .card-image-buzz {
        height: 150px;
        transform: translate(80px, -80px);
      }
      .card-image-fizz {
        height: 100px;
        transform: translate(80px, -55px);
      }
      .card-image-fizzbuzz {
        height: 60px;
        transform: translate(55px, -35px);
      }
      .margin-top {
        margin-top: 20px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageBadgeComponent {
  @Input() imageBadge: ImageBadge = new ImageBadge();
}
