import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService, public snackBar: MatSnackBar) { }

  openSnackBar(message: string) {
    this.snackBar.open(message, 'Dismiss', {duration: 2000});
    this.messageService.clear();
  }

  ngOnInit() {
    this.messageService.getMessage().subscribe(value => this.openSnackBar(value));
  }

}
