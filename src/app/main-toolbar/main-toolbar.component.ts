import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.css']
})
export class MainToolbarComponent implements OnInit {

  @Input() sideNav;

  public screenSize = 'large';


  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.breakpointObserver.observe([
        '(max-width: 600px)'
    ]).subscribe(e => {
      if (e.matches) {
      this.screenSize = 'small';
      }
    });
    this.breakpointObserver.observe([
      '(min-width: 601px)'
    ]).subscribe(e => {
      if (e.matches) {
        this.screenSize = 'large';
      }
    });
  }
}
