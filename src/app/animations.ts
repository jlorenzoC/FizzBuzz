import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const hideShow = trigger('hideFilterCard', [
  state(
    'hide',
    style({
      visibility: 'hidden',
      opacity: 0,
    })
  ),
  state(
    'show',
    style({
      visibility: 'visible',
      opacity: 1,
    })
  ),
  transition('* => *', animate(150)),
]);
