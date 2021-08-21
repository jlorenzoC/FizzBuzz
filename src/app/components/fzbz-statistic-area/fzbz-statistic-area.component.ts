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
  @Input() set filteredElements(filteredElements: number[]) {
    this._filteredElements = new Statistic(filteredElements);
  }
}
