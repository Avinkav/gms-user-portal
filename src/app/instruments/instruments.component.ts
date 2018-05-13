import { Component, OnInit } from '@angular/core';
import { Instrument } from '../models/instrument';
import { MockdataService } from '../services/mockdata.service';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';
import { routerTransition } from '../animations/router-transition';

@Component({
  selector: 'app-instruments',
  animations: [routerTransition],
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  burrowedInstruments: Instrument[];

  instruments: Instrument[];


  constructor(private dataService: MockdataService) { }

  ngOnInit() {
    this.dataService.getInstruments().subscribe(value => this.instruments = value);
    this.dataService.getBorrowedInstruments().subscribe(value => this.burrowedInstruments = value);
  }

}
