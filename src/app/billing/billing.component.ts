import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  Router
} from '@angular/router';
import * as $ from 'jquery';
import {
  fadeInAnimation
} from '../animations/fadeInAnimation';
import { MockdataService } from '../services/mockdata.service';

@Component({
  selector: 'app-billing',
  animations: [fadeInAnimation],
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {

  @ViewChild('row') row;
  columnsToDisplay = ['date', 'payee', 'status', 'amount'];

  payments;
   selectedBill;

  constructor(private router: Router, private mockDataService: MockdataService) {}

  close() {
    $('#billDetail').slideUp(() => {
      $('#recentBills').slideDown();
    });

  }

  onRowClick(row, event) {
    console.log(event);
    if (this.selectedBill === row && $('#billDetail').css('display') === 'block') {
      return;
    }
    $('#recentBills').slideUp(() => {
      $('#billDetail').slideUp(() => {
        this.selectedBill = row;
        $('#billDetail').slideDown();
      });
    });
  }

  ngOnInit() {
    this.mockDataService.getPayments().subscribe(p => this.payments = p);
    this.selectedBill = this.payments[0];
  }

}
