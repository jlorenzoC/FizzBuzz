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
      opacity: 0,
    })
  ),
  state(
    'show',
    style({
      opacity: 1,
    })
  ),
  transition('* => *', animate(150)),
]);
