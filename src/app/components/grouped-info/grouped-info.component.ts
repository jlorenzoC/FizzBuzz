import { Component, Input } from '@angular/core';
import { FizzBuzzBaseModel } from 'src/app/models/FizzBuzzBaseModel';
import { ModelFactory } from 'src/app/models/ModelFactory';

@Component({
  selector: 'app-grouped-info',
  templateUrl: './grouped-info.component.html',
  styleUrls: ['./grouped-info.component.scss'],
})
export class GroupedInfoComponent {
  _group!: [string, number[]];
  imageBadge!: FizzBuzzBaseModel;
  imageBadgeFactory = new ModelFactory();
  numberType!: string;
  elementsGroup!: number[];

  @Input() filterCriteria!: string;
  @Input() set group(group: [string, number[]]) {
    [this.numberType, this.elementsGroup] = group;
    this.imageBadge = this.imageBadgeFactory.getModel(this.numberType);
  }

  getHighlighted(filterCriteria: string): any {
    if (this.filterCriteria !== '')
      return filterCriteria.includes(this.filterCriteria)
        ? {
            backgroundColor: '#673ab7',
            color: 'white',
            borderRadius: '16px',
            margin: '.5px',
          }
        : {};
    return {};
  }

  replaceWhitespaces(): string {
    const regexAllWhiteSpaces: RegExp = / /g;
    return this.imageBadge?.fizzbuzzType
      .toString()
      .replace(regexAllWhiteSpaces, '-');
  }
}
