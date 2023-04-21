import {Component, ElementRef, AfterViewInit, ViewChild, OnInit} from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements  OnInit{
  principal: boolean;
  constructor() {
    this.principal = true;
  }
  ngOnInit() {
    return true;
  }

  get navbar(): boolean{
    return this.principal;
  }

}
