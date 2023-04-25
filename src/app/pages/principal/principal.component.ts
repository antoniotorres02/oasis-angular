import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent{
  user: any;
  signedOut = false;


  @Output() principalRefChange = new EventEmitter<boolean>();
  principalRef = true;

  setPrincipal() {
    this.principalRef = false;
    this.principalRefChange.emit(this.principalRef);
  }

}
