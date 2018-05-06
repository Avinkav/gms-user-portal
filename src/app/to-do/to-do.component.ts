import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo';
import { TodoService } from '../services/todo.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  selectedItem: TodoItem;

  todoItems: TodoItem[];

  onSelect(todo: TodoItem): void {
    this.selectedItem = todo;
  }

  constructor(private todoService: TodoService, public snackBar: MatSnackBar) { }

  getData() {
    this.todoService.getTodoItems().subscribe(items => {
      this.todoItems = items;
      this.selectedItem = this.todoItems[0];
    });
  }

  reload() {
    this.getData();
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Dismiss', {
      duration: 2000,
    });
  }

  ngOnInit() {
    this.getData();
  }

}
