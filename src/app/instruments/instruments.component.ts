import { Component, OnInit } from '@angular/core';
import { Instrument } from '../models/instrument';
import { MockdataService } from '../services/mockdata.service';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.component.css']
})
export class InstrumentsComponent implements OnInit {

  instruments: Instrument[];

  constructor(private dataService: MockdataService) { }

  ngOnInit() {
    this.dataService.getInstruments().subscribe(value => this.instruments = value);
  }

}
