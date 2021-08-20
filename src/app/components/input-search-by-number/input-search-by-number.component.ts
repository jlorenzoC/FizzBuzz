import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-input-search-by-number',
  template: `
    <div *ngIf="showContent; else skeleton">
      <div *ngIf="showTitle">
        <div class="p-card-title">FizzBuzz</div>
        <div class="p-card-subtitle">
          Which number is Fizz, Buzz, or FizzBuzz?
        </div>
      </div>
      <span class="p-input-icon-right w-full margin-top16">
        <i class="pi pi-search "></i>
        <input
          [id]="id"
          #input
          (input)="emitter.emit(input.value)"
          [ngModel]="filterValue"
          (ngModelChange)="filterValueChange.emit($event)"
          pInputText
          placeholder="Search by number ..."
          pKeyFilter="int"
          class="w-full"
          st
        />
      </span>
    </div>
    <ng-template #skeleton>
      <app-skeleton-fzbz-filter-card
        *ngIf="showTitle; else skeletonWithoutTitleSkeleton"
      ></app-skeleton-fzbz-filter-card>
      <ng-template #skeletonWithoutTitleSkeleton>
        <p-skeleton
          class="w-7"
          styleClass="my-2"
          height="3rem"
          borderRadius="16px"
        ></p-skeleton>
      </ng-template>
    </ng-template>
  `,
  styles: [
    `
      .margin-top16 {
        margin-top: 16px !important;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchByNumberComponent {
  @Input() showTitle = false;
  @Input() id!: string;
  @Input() showContent!: boolean;
  @Output() emitter = new EventEmitter<string>();
  @Input() filterValue!: number;
  @Output() filterValueChange = new EventEmitter<number>();
}
