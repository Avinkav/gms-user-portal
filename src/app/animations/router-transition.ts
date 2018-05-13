import { trigger, animate, style, group, animateChild, query, stagger, transition } from '@angular/animations';

export const routerTransition = trigger('routerTransition', [

  // route 'enter' transition
  transition(':enter', [ query('img,:enter',

    // css styles at start of transition
    style({ opacity: 0 }), {optional: true}),

    // animation and styles at end of transition
    query('img,:enter', animate('0.2s', style({ opacity: 1 })), {optional: true})
  ]),
]);

