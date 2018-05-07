import {
  Component,
  OnInit
} from '@angular/core';
import {
  MatChipInputEvent,
} from '@angular/material';
import {
  ENTER,
  COMMA
} from '@angular/cdk/keycodes';

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

  public instruments = [{
      name: 'Piano'
    },
    {
      name: 'Guitar'
    },
    {
      name: 'Thabla'
    },
  ];

  public user = {
    name: 'Jane Doe',
    imageUrl: 'https://orig00.deviantart.net/3ac4/f/2018/125/2/8/study_03___portrait_by_kabupato-dcarjpj.jpg'
  };

  public languages = ['Swahili', 'Sanskrit', 'Latin'];

  addInstrument(event: MatChipInputEvent): void {

    // Add to list
    if ((event.value || '').trim()) {
      this.instruments.push({
        name: event.value.trim()
      });
    }

    // Reset input
    if (event.input) {
      event.input.value = '';
    }
  }

  removeInstrument(instrument: any): void {
    const index = this.instruments.indexOf(instrument);

    if (index >= 0) {
      this.instruments.splice(index, 1);
    }
  }

  addLanguage(event: MatChipInputEvent): void {

    // Add to list
    if ((event.value || '').trim()) {
      this.languages.push(event.value.trim());
    }

    // Reset input
    if (event.input) {
      event.input.value = '';
    }
  }

  RemoveLanguage(lang: any): void {
    const index = this.instruments.indexOf(lang);

    if (index >= 0) {
      this.languages.splice(index, 1);
    }
  }

  constructor() {}

  ngOnInit() {}

}
