import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acceuil-agent',
  templateUrl: './acceuil-agent.component.html',
  styleUrls: ['./acceuil-agent.component.css']
})
export class AcceuilAgentComponent implements OnInit {
  sideNavStatus:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
