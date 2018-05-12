import { Component, OnInit, ViewChild } from '@angular/core';
import { Instrument } from '../models/instrument';
import 'fullcalendar';
import { Teacher } from '../models/teacher';
import { MockdataService } from '../services/mockdata.service';

@Component({
  selector: 'app-book-lesson',
  templateUrl: './book-lesson.component.html',
  styleUrls: ['./book-lesson.component.css']
})
export class BookLessonComponent implements OnInit {

  instruments: Instrument[];
  containerEl: JQuery;

  @ViewChild('stepper') stepper;
  @ViewChild('step1') step1;
  @ViewChild('step2') step2;
  events;

  teachers: Teacher[] = [{
      name: 'Luciano Pavarotti',
      instruments: ['Opera', 'Theatre']
    },
    {
      name: 'Wolfgang Mozart',
      instruments: ['Violin', 'Ochestra']
    },
    {
      name: 'Skrillex',
      instruments: ['Vinyl', 'CDJs']
    },
    {
      name: 'Adele',
      instruments: ['Pop', 'Rap']
    },
  ];

  selectedTeacher: Teacher;
  selectedDate: Date;

  constructor(private mockData: MockdataService) {}

  ngOnInit() {
    this.mockData.getEvents().subscribe(e => this.events = e);
    $('#full-calendar').fullCalendar({
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

  clickTeacher(t: Teacher) {
    this.selectedTeacher = t;
    this.step1.completed = true;
    this.stepper.next();
  }

  eventClick(eventObj: any) {
    $('#full-calendar').fullCalendar('changeView', 'agendaDay', eventObj.start);
  }

  clickNext() {
    this.step2.completed = true;
    this.stepper.next();
  }

}
