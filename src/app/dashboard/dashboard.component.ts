import {
  Component,
  OnInit,
  ViewChild,
  Input
} from '@angular/core';
import 'fullcalendar';
import {
  MockdataService
} from '../services/mockdata.service';
import * as $ from 'jquery';

import { range } from 'rxjs';
import { fadeInAnimation } from '../animations/fadeInAnimation';

@Component({
  selector: 'app-dashboard',
  animations: [fadeInAnimation],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']})
export class DashboardComponent implements OnInit {

  public upToDate = true;
  events;
  @Input() outlet;

  constructor(private mockData: MockdataService) { }

  ngOnInit() {
    this.mockData.getEvents().subscribe(e => this.events = e);
    $('#full-calendar').fullCalendar({
      navLinks: true,
      editable: true,
      eventLimit: false,
      header: {
        left: '',
        center: 'title',
        right: ''
      },
      events: this.events
    });

    $('.fc-button').on('click', e => {
      alert('test');
    });
  }
 
  getState() {
    return 'test';
  }
}
