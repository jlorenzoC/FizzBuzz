import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { StaticResourceService } from 'src/app/services/static-resource/static-resource.service';

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
