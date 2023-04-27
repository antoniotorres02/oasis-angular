import { Component } from '@angular/core';
import {JsService} from "../../service/js.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private js: JsService) {
    this.js.loadModuleScript('/nestor','formvalidation.js');
  }
}
