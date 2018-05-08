import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav } from '@angular/material';


@Component({
  selector: 'app-navmenu',
  templateUrl: './navmenu.component.html',
  styleUrls: ['./navmenu.component.css']
})
export class NavmenuComponent implements OnInit {

   @Input() sideNav: MatSidenav;

   closeNav() {
    if (this.sideNav.mode === 'push') {
      this.sideNav.close();
    }
   }
  ngOnInit() {
  }
}
