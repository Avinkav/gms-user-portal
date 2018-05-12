import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { fadeInAnimation } from '../animations/fadeInAnimation';

@Component({
  selector: 'app-billing',
  animations: [fadeInAnimation],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  @ViewChild('row') row;
  columnsToDisplay = ['date', 'payee', 'status', 'amount'];

  paymentArray = [
    { id: 1, date: '15-Apr-2018', payee: 'Dr. Hugo Strange', status: 'Overdue', amount: 50, description: 'You took Violin classes' },
    { id: 2, date: '05-Apr-2018', payee: 'Dr. Albert Einstein', status: 'Paid', amount: 299792.458, description: 'You took General Music Thoery of Relativity classes' }
  ];

  selectedBill = this.paymentArray[0];

  constructor(private router: Router) { }

  close() {
    $('#billDetail').slideUp(() => { $('#recentBills').slideDown(); });

  }

  onRowClick(row, event) {
    console.log(event);
    if (this.selectedBill === row && $('#billDetail').css('display') === 'block') { return; }
    $('#recentBills').slideUp(() => {
      $('#billDetail').slideUp(() => {
        this.selectedBill = row;
        $('#billDetail').slideDown();
      });
    });
  }

  ngOnInit() {

  }

}
