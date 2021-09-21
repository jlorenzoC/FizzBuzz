import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-fzbz-cards',
  templateUrl: './skeleton-fzbz-card.component.html',
  styles: [
    `
      :host {
        height: 8rem;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonFzbzCardComponent {}
