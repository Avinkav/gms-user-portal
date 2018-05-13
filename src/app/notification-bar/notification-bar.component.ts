import {
  Component,
  OnInit
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'app-notification-bar',
  animations: [trigger('slide', [state('true', style({
      transform: 'translateY(0)'
    })),
    state('false', style({
      transform: 'translateY(100%)'
    })),
    transition('* => *', animate(300))
  ])],
  templateUrl: './notification-bar.component.html',
  styleUrls: ['./notification-bar.component.css']
})
export class NotificationBarComponent implements OnInit {

  public isOn = 'true';
  constructor() {}

  ngOnInit() {}

}
