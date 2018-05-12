import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [

  // route 'enter' transition
  transition(':enter', [ query(':enter',

    // css styles at start of transition
    style({ opacity: 0 }), {optional: true}),

    // animation and styles at end of transition
    query(':enter', animate('.3s', style({ opacity: 1 })), {optional: true})
  ]),
]);

