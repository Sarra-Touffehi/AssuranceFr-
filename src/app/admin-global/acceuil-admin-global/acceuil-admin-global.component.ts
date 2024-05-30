import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil-admin-global',
  templateUrl: './acceuil-admin-global.component.html',
  styleUrls: ['./acceuil-admin-global.component.css']
})
export class AcceuilAdminGlobalComponent implements OnInit {
  sideNavStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
