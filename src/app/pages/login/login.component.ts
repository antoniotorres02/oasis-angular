import { Component } from '@angular/core';
import {JsService} from "../../service/js.service";
import {opacity} from "../../animations/animation";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [ opacity ]
})
export class LoginComponent {
  constructor(private js: JsService) {
    this.js.loadModuleScript('/nestor','LoginValidation.js');
  }
}
