import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent,  } from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  separatorKeysCodes = [ENTER, COMMA];

  public instruments = [
    {name: 'Piano'},
    {name: 'Guitar'},
    {name: 'Thabla'},
  ];

  add(event: MatChipInputEvent): void {

    // Add to list
    if ((event.value || '').trim()) {
      this.instruments.push({ name: event.value.trim() });
    }

    // Reset input
    if (event.input) {
      event.input.value = '';
    }
  }

  remove(instrument: any): void {
    const index = this.instruments.indexOf(instrument);

    if (index >= 0) {
      this.instruments.splice(index, 1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
