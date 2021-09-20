import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModelFactory } from 'src/app/models/ModelFactory';
import { replaceWhiteSpacesForHyphon } from 'src/app/util/replace-withe-space-for-hyphon.function';
import { FizzBuzzBaseModel } from '../../models/FizzBuzzBaseModel';

@Component({
  selector: 'app-image-badge',
  template: `
    <div class="flex justify-content-between" *ngIf="model">
      <img
        [src]="imagePath"
        [alt]="imageAlternative"
        [class]="styleClass"
        [height]="model.height"
        [width]="model.width"
      />
      <p-badge
        *ngIf="model.fizzbuzzType != 'I am not'"
        [value]="model.fizzbuzzType | toString"
        [pTooltip]="tooltip"
        [severity]="badgeSeverity"
        class="cursor-pointer margin-top"
      ></p-badge>
    </div>
  `,
  styles: [
    `
      .Buzz {
        transform: translate(80px, -35px);
      }
      .Fizz {
        transform: translate(80px, -10px);
      }
      .FizzBuzz {
        transform: translate(55px, 10px);
      }
      .I-am-not {
        transform: translate(100px, 10px);
      }
      .margin-top {
        position: absolute;
        bottom: 10px;
        right: 10px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageBadgeComponent {
  model?: FizzBuzzBaseModel;
  imageBadgeFactory = new ModelFactory();
  imagePath = '';
  imageAlternative = '';
  tooltip = '';
  badgeSeverity = '';
  styleClass?: string;
  @Input() set fizzbuzzType(input: { type: string; number: number }) {
    this.model = this.imageBadgeFactory.getModel(input.type, input.number);
    this.imagePath = this.model.getImagePath();
    this.imageAlternative = this.model.imageAlternative;
    this.tooltip = this.model.tooltip;
    this.badgeSeverity = this.model.badgeSeverity;
    this.styleClass = replaceWhiteSpacesForHyphon(
      this.model.fizzbuzzType.toString()
    );
  }
}
