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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchByNumberComponent {
  @Input() id!: string;
  @Input() showContent = true;
  @Output() value = new EventEmitter<string>();
  @Input() filterValue!: number;
  @Output() filterValueChange = new EventEmitter<number>();
  @Input() filteredElements!: number[];
}
