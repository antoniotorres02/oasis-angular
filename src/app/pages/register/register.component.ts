import { Component } from '@angular/core';
import {JsService} from "../../service/js.service";
import {opacity} from "../../animations/animation";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [ opacity ]
})
export class RegisterComponent {
  constructor(private js: JsService) {
    this.js.loadModuleScript('/nestor','formvalidation.js');
  }
}
