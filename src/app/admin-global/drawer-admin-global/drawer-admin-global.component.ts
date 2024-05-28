import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer-admin-global',
  templateUrl: './drawer-admin-global.component.html',
  styleUrls: ['./drawer-admin-global.component.css']
})
export class DrawerAdminGlobalComponent implements OnInit {
  sideNavStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
