import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CheckStore } from '../../../models/CheckStore';
import { environment } from './../../../../environments/environment';

@Component({
  selector: 'app-dashboard-inside-sidebar',
  templateUrl: './dashboard-inside-sidebar.component.html',
  styles: [
    `
      @media (min-device-width: 576px) {
        img#fzbz-sidebar-image {
          width: 110px !important;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardInsideSidebarComponent {
  @Input() numbersGenerationFinished = true;
  @Input() filterValue = '';
  @Input() numbersToProcessByFzBzPipe: number[] = [];
  @Input() checkStore = new CheckStore();
  @Output() emitValue = new EventEmitter<HTMLInputElement>();
  @Output() checkStoreEmitter = new EventEmitter<CheckStore>();
  @Output() filterValueChange = new EventEmitter<string>();
  rootPath = environment.imagesPath;
}
