import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-input-search-by-number',
  templateUrl: 'input-search-by-number.component.html',
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
  @Output() value = new EventEmitter<string>();
  @Input() filterValue!: number;
  @Output() filterValueChange = new EventEmitter<number>();
  @Input() filteredElements!: number[];
}
