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

}
