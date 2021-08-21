import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-skeleton-fzbz-filter-card',
  template: `
    <div class="flex justify-content-between">
      <p-skeleton
        id="title-skeleton"
        height="2rem"
        styleClass="my-2"
        borderRadius="16px"
      ></p-skeleton>
      <app-fzbz-statistic-area
        [filteredElements]="filteredElements"
      ></app-fzbz-statistic-area>
    </div>
    <p-skeleton
      width="70%"
      styleClass="mt-2 mb-4"
      borderRadius="16px"
    ></p-skeleton>
    <p-skeleton
      styleClass="mt-2"
      height="3rem"
      borderRadius="16px"
    ></p-skeleton>
  `,
  styles: [
    `
      :host::ng-deep #title-skeleton {
        width: 50%;
        max-width: 200px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonFzbzFilterCardComponent {
  @Input() filteredElements!: number[];
}
