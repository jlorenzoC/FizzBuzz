import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CheckStore } from 'src/app/models/CheckStore';

@Component({
  selector: 'app-input-search-by-number',
  templateUrl: 'input-search-by-number.component.html',
  styleUrls: ['input-search-by-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputSearchByNumberComponent {
  @Input() id?: string;
  @Input() showContent = true;
  @Input() filterValue?: string;
  @Input() checkStore?: CheckStore;
  @Input() filteredElements?: number[];

  @Output() value = new EventEmitter<HTMLInputElement>();
  @Output() filterValueChange = new EventEmitter<string>();
  @Output() clickTagFilter = new EventEmitter<CheckStore>();

  correctIfStartsWithZeroAndEmit(input: HTMLInputElement) {
    if (input.value.indexOf('0') == 0) input.value = '';
    this.value.emit(input);
  }
}
