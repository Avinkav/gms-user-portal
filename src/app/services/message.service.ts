import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 message = '';

  add(message: string) {
    this.message = message ;
  }

  getMessage() {
    return of(this.message);
  }

  clear() {
    this.message = '';
  }
}
