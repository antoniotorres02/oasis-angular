import { Component } from '@angular/core';
import {opacity} from "../../animations/animation";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css'],
  animations: [ opacity ]
})
export class ManagerComponent {

}
