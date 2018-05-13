import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import 'fullcalendar';
import {
  MockdataService
} from '../services/mockdata.service';
import {
  Instrument
} from '../models/instrument';
import {
  Teacher
} from '../models/teacher';
import {
  CdkTextareaAutosize
} from '@angular/cdk/text-field';
import {
  MatStep
} from '@angular/material';
import * as $ from 'jquery';
import 'fullcalendar';
import { fadeInAnimation } from '../animations/fadeInAnimation';

@Component({
  selector: 'app-lessons',
  animations: [fadeInAnimation],
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  instruments: Instrument[];
  events;

  selectedTeacher: Teacher;
  selectedDate: Date;

  constructor(private mockData: MockdataService) {}

  ngOnInit() {
    this.mockData.getEvents().subscribe(e => this.events = e);
    $('#lesson-calendar').fullCalendar({
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      events: this.events,
      height: 'parent',
      eventClick: this.eventClick
    });

    this.mockData.getInstruments().subscribe(i => this.instruments = i);
  }

  eventClick(eventObj: any) {
    $('#full-calendar').fullCalendar('changeView', 'agendaDay', eventObj.start);
  }
}
