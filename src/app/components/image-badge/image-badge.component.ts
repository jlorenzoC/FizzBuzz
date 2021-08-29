import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ModelFactory } from 'src/app/models/ModelFactory';
import { replaceWhiteSpacesForHyphon } from 'src/app/util/replace-withe-space-for-hyphon.function';
import { FizzBuzzBaseModel } from '../../models/FizzBuzzBaseModel';

@Component({
  selector: 'app-image-badge',
  template: `
    <div class="flex justify-content-between" *ngIf="imageBadge">
      <img
        [src]="imageBadge.getImagePath()"
        [alt]="imageBadge.imageAlternative"
        [class]="styleClass"
      />
      <p-badge
        [value]="imageBadge.fizzbuzzType.toString()"
        [pTooltip]="imageBadge.tooltip"
        [severity]="imageBadge.badgeSeverity"
        class="cursor-pointer margin-top"
      ></p-badge>
    </div>
  `,
  styles: [
    `
      .Buzz {
        height: 150px;
        transform: translate(80px, -35px);
      }
      .Fizz {
        height: 100px;
        transform: translate(80px, -10px);
      }
      .FizzBuzz {
        height: 60px;
        transform: translate(55px, 10px);
      }
      .I-am-not {
        height: 60px;
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
  imageBadge?: FizzBuzzBaseModel;
  imageBadgeFactory = new ModelFactory();
  styleClass?: string;
  @Input() set fizzbuzzType(input: { type: string; number: number }) {
    this.imageBadge = this.imageBadgeFactory.getModel(input.type, input.number);
    this.styleClass = replaceWhiteSpacesForHyphon(
      this.imageBadge.fizzbuzzType.toString()
    );
  }
}
