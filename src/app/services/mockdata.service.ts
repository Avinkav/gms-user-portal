import { Injectable } from '@angular/core';
import { Instrument, instruments } from '../models/instrument';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MockdataService {

  constructor() { }

  getInstruments(): Observable<Instrument[]> {
    return of(instruments);
  }

  getEvents() {
    return of([
      {
        title  : 'Piano with Mozart',
        start  : '2018-05-15',
        color : '#F44336'
      },
      {
        title  : 'Opera with Luciano Pavarotti ',
        start  : '2018-05-20',
        color : '#FFC107'
      },
      {
        title  : 'CDJs with Skrillex ',
        start  : '2018-05-31',
        color : '#4CAF50'
      },
    ]);
  }

  getFreeSlots() {
    return of([
      {
        title  : 'Booked',
        start  : '2018-05-13T09:00:00+10:00',
        end : '2018-05-13T16:00:00+10:00',
        color : '#F44336'
      },
      {
        title  : 'Free',
        start  : '2018-05-15T11:00:00+10:00',
        end : '2018-05-15T14:00:00+10:00',
        color : '#4CAF50',
      },
      {
        title  : 'Free',
        start  : '2018-05-25T16:00:00+10:00',
        end : '2018-05-25T20:00:00+10:00',
        color : '#FFC107',
      },
    ]);
  }

}
