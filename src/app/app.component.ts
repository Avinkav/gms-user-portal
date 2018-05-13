import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { routerTransition } from './animations/router-transition';

@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('sideNav') sideNav: MatSidenav;

  title = 'User Portal';
  sideNavMode = 'side';

  constructor(private breakpointObserver: BreakpointObserver, public snackBar: MatSnackBar) { }

  activateSmallLayout() {
    console.log('Changing layout to handset/tablet/small');
    this.sideNavMode = 'push';
    this.sideNav.close();
  }

  activateLargeLayout() {
    console.log('Changing layout to large/web');
    this.sideNavMode = 'side';
    this.sideNav.open();
  }

  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.XSmall
    ]).subscribe(e => {
      if (e.matches) {
      this.activateSmallLayout();
      }
    });
    this.breakpointObserver.observe([
      '(min-width: 599px)'
    ]).subscribe(e => {
      if (e.matches) {
      this.activateLargeLayout();
      }
    });

  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
}

}
