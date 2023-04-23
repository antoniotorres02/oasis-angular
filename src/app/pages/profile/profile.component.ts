import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  pedidosCargado: boolean = true;
  pedidosCompletosCargado: boolean = false;
  wishlist: boolean = false;
  soporteCargado: boolean = false;
  configuracionCargado: boolean = false;

  current: number = 0;

  arrayAux: (&boolean[]) = [this.pedidosCargado, this.pedidosCompletosCargado, this.wishlist, this.soporteCargado, this.configuracionCargado];

  public cargarComponente(currentDisplay: number) {
    this.arrayAux[this.current] = false;
    this.arrayAux[currentDisplay] = true;
    this.current = currentDisplay;
    console.log(this.arrayAux[currentDisplay]);
  }
}
