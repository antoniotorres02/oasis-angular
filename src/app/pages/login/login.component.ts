import { Component } from '@angular/core';
import {JsService} from "../../service/js.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private js: JsService) {
    this.js.loadModuleScript('/nestor','LoginValidation.js');
  }
}
