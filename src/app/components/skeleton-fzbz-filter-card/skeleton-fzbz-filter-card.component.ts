import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-fzbz-filter-card',
  template: `
    <p-skeleton
      height="2rem"
      width="35%"
      styleClass="my-2"
      borderRadius="16px"
    ></p-skeleton>
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonFzbzFilterCardComponent {}
