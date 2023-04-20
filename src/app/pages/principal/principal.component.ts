import { Component } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
  principal: boolean;
  constructor() {
    this.principal = false;
  }

  get navbar(): boolean{
    return this.principal;
  }

}
