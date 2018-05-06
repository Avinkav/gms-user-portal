import { Injectable } from '@angular/core';
import { TodoItem, TODOS } from '../models/todo';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private messageService: MessageService) { }

  getTodoItems(): Observable<TodoItem[]> {
    this.messageService.add('List fetched succesfully');
    return of(TODOS);
  }
}
