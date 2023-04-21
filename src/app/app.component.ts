import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {PrincipalComponent} from "./pages/principal/principal.component";
import {LoginComponent} from "./pages/login/login.component";
import {provideRouter} from "@angular/router";
import {AppModule} from "./app.module";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'oasis-angular';
  mostrarnavbar: AppModule;
  principal: PrincipalComponent;
  constructor(){
    this.mostrarnavbar = new AppModule();
    this.principal = new PrincipalComponent();
  }

  get navbar(){
    return alert(typeof this.mostrarnavbar.root);
  }
  protected readonly LoginComponent = LoginComponent;
  protected readonly PrincipalComponent = PrincipalComponent;

}
