import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';





@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent{

  @Output() principalRefChange = new EventEmitter<boolean>();
  principalRef = true;

  setPrincipal() {
    this.principalRef = false;
    this.principalRefChange.emit(this.principalRef);
  }
}
