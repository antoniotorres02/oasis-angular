import { Component } from '@angular/core';
import {JsService} from "../../service/js.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
<<<<<<< HEAD
export class LoginComponent {
  constructor(private js: JsService) {
    this.js.loadModuleScript('/nestor','LoginValidation.js');
  }
=======
export class LoginComponent{
>>>>>>> 034801927d02461d33c2e5e0c8d7eaa647b26896

}
