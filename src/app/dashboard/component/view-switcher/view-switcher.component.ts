import { StaticResourceService } from './../../../services/static-resource.service';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-view-switcher',
  templateUrl: './view-switcher.component.html',
  styleUrls: ['./view-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewSwitcherComponent {
  @Input() isGroupedCardViewActivated = false;
  @Input() isIndividualCardViewActivated = false;
  @Output() view = new EventEmitter<string>();
  constructor(public staticResource: StaticResourceService) {}
}
