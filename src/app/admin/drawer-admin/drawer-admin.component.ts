import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer-admin',
  templateUrl: './drawer-admin.component.html',
  styleUrls: ['./drawer-admin.component.css']
})
export class DrawerAdminComponent implements OnInit {
  sideNavStatus:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
