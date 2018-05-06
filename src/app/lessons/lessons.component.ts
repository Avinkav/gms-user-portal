import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  CalendarComponent
} from 'ng-fullcalendar';
import {
  Options
} from 'fullcalendar';
import {
  MockdataService
} from '../services/mockdata.service';
import {
  Instrument
} from '../models/instrument';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {
  instruments: Instrument[];
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  constructor(private mockData: MockdataService) {}

  ngOnInit() {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay,listMonth'
      },
    };

    this.mockData.getInstruments().subscribe(i => this.instruments = i);
  }

}
