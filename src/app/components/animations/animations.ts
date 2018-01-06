import {animate, state, style, transition, trigger} from '@angular/animations';

export const dropDown = trigger('dropDown', [

    state('hidden', style({

      transform: 'translateY(-60%)', opacity: 0
    })),
    state('dropDown', style({
      transform: 'translateY(24%)', opacity: 100

    })),
    transition('hidden => dropDown', animate('300ms ease-in'))
  ])
;
