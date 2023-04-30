import {Component, OnInit, ViewChild} from '@angular/core';
import {PrincipalComponent} from "../../pages/principal/principal.component";
import {PrincipalModalServicioService} from "../../Services/principal-modal-servicio.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  principal!:boolean;
  constructor(private modal:PrincipalModalServicioService) {

  }
  ngOnInit() {
    this.modal.$modal_Cat.subscribe((valor) => {this.principal = valor});
  }

  openCategoria(){
    this.principal = true;
  }

  closeCaetegoria(){
    this.modal.$modal_Cat.emit(false);
  }
export class HeaderComponent {
  user: any;
  signedOut = false;

  constructor(public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      this.user = user;
    });
  }

  async signOut() {
    await this.auth['signOut']();
    this.signedOut = true;
  }

  ngAfterViewInit() {
    const cerrarSesionBtn = document.getElementById('cerrar-sesion-btn');
    if (cerrarSesionBtn) {
      cerrarSesionBtn.addEventListener('click', () => {
        this.signOut();
      });
    } else {
      console.warn('Elemento no encontrado: cerrar-sesion-btn');
    }
  }

}
