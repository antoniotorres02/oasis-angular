import { Component } from '@angular/core';
import {PrincipalComponent} from "./pages/principal/principal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oasis-angular';
  principal: object= PrincipalComponent;
}
