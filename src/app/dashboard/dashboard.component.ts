import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  CalendarComponent
} from 'ng-fullcalendar';
import {
  Options,
  EventObject
} from 'fullcalendar';
import {
  MockdataService
} from '../services/mockdata.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public upToDate = true;
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  events: EventObject[];

  constructor(private mockData: MockdataService) {}

  ngOnInit() {
    this.mockData.getEvents().subscribe(e => this.events = e);
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: '',
        center: 'title',
        right: ''
      },
      events: this.events
    };

    $('.fc-button').on('click', e => {
      alert('test');
    });
  }

}
