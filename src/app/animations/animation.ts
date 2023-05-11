import {
  trigger,
  style,
  animate,
  transition,
  state,
  group
} from '@angular/animations';


export const opacity = [
trigger('fade', [
    state('void', style({ opacity: 0 })),
    transition(':enter, :leave', [
      animate(2000)
    ]),
  ]),
];
