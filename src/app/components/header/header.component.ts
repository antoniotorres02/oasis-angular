import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
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
  user: any;
  signedOut = false;
  constructor(private modal:PrincipalModalServicioService, public auth: AngularFireAuth) {
    this.auth.authState.subscribe(user => {
      this.user = user;
    });
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

  async signOut() {
    await this.auth['signOut']();
    this.signedOut = false;
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
