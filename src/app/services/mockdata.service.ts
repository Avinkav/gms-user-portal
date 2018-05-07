import { Injectable } from '@angular/core';
import { Instrument, instruments } from '../models/instrument';
import { Observable, of } from 'rxjs';
import { EventObject } from 'fullcalendar';

@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  constructor() { }

  getInstruments(): Observable<Instrument[]> {
    return of(instruments);
  }

  getEvents(): Observable<EventObject[]> {
    return of([
      {
        title  : 'Piano with Mozart',
        start  : '2018-05-15',
        color : 'green'
      },
      {
        title  : 'Opera with Luciano Pavarotti ',
        start  : '2018-05-13',
        color : 'red'
      },
      {
        title  : 'Opera with Luciano Pavarotti ',
        start  : '2018-05-27',
        color : 'red'
      },
    ]);
  }

  getFreeSlots(): Observable<EventObject[]> {
    return of([
      {
        title  : 'Booked',
        start  : '2018-05-13T09:00:00+10:00',
        end : '2018-05-13T16:00:00+10:00',
        color : 'red'
      },
      {
        title  : 'Free',
        start  : '2018-05-15T11:00:00+10:00',
        end : '2018-05-15T14:00:00+10:00',
        color : 'green',
      },
      {
        title  : 'Free',
        start  : '2018-05-25T16:00:00+10:00',
        end : '2018-05-25T20:00:00+10:00',
        color : 'green',
      },
    ]);
  }

}
