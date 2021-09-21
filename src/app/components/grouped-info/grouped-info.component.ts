import { replaceWhiteSpacesForHyphon } from './../../util/replace-withe-space-for-hyphon.function';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FizzBuzzBaseModel } from 'src/app/models/FizzBuzzBaseModel';
import { ModelFactory } from 'src/app/models/ModelFactory';

@Component({
  selector: 'app-grouped-info',
  templateUrl: './grouped-info.component.html',
  styleUrls: ['./grouped-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupedInfoComponent {
  _group?: [string, number[]];
  imageBadge!: FizzBuzzBaseModel;
  imageBadgeFactory = new ModelFactory();
  numberType?: string;
  elementsGroup?: number[];
  styleClass?: string;
  imageAlternative = '';
  imgePath = '';
  badgeSeverity = '';

  @Input() filterCriteria: string = '';
  @Input() set group(group: [string, number[]]) {
    [this.numberType, this.elementsGroup] = group;
    this.imageBadge = this.imageBadgeFactory.getModel(this.numberType);
    this.imageAlternative = this.imageBadge.imageAlternative;
    this.imgePath = this.imageBadge.getImagePath();
    this.badgeSeverity = this.imageBadge.badgeSeverity;
    this.styleClass = replaceWhiteSpacesForHyphon(
      this.imageBadge.fizzbuzzType.toString()
    );
  }
}
