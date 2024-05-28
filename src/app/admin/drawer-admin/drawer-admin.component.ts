import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drawer-admin',
  templateUrl: './drawer-admin.component.html',
  styleUrls: ['./drawer-admin.component.css']
})
export class DrawerAdminComponent implements OnInit {
  sideNavStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
