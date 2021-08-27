import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Statistic } from './../../models/Statistic';

@Component({
  selector: 'app-fzbz-statistic-area',
  templateUrl: './fzbz-statistic-area.component.html',
  styleUrls: ['./fzbz-statistic-area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FzbzStatisticAreaComponent {
  _filteredElements!: Statistic;
  @Input() checkStore = new CheckStore();
  @Output() checkedStatus = new EventEmitter<CheckStore>();
  @Input() set filteredElements(filteredElements: number[]) {
    this._filteredElements = new Statistic(filteredElements);
  }

  onClickAll() {
    this.checkStore.onClickAll();
    this.checkedStatus.emit(this.checkStore);
  }
  onClickFizz() {
    this.checkStore.onClickFizz();
    this.checkedStatus.emit(this.checkStore);
  }
  onClickBuzz() {
    this.checkStore.onClickBuzz();
    this.checkedStatus.emit(this.checkStore);
  }
  onClickFizzBuzz() {
    this.checkStore.onClickFizzBuzz();
    this.checkedStatus.emit(this.checkStore);
  }
}
