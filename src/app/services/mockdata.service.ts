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

}
