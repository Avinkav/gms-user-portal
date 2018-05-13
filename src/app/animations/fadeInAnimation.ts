import { trigger, animate, style, group, animateChild, query, stagger, transition, state } from '@angular/animations';

export const fadeInAnimation = trigger('fadeInAnimation', [

    // route 'enter' transition
    transition(':enter', [

      // css styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
    ]),
  ]);

  export const editFab = trigger('editFab', [

    transition('* <=> *', [

      // css styles at start of transition
      style({ transform: 'rotate(0)' }),

      // animation and styles at end of transition
      animate('.3s', style({ transform: 'rotate(-360deg)' }))
    ]),
  ]);


