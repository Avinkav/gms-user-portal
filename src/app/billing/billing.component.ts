import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  columnsToDisplay = ['date', 'payee', 'status', 'amount'];

  paymentArray = [
    {date: '15-Apr-2018', payee: 'Dr. Hugo Strange', status: 'Overdue', amount: 50 },
    {date: '05-Apr-2018', payee: 'Dr. Albert Einstein', status: 'Paid', amount: 90 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
