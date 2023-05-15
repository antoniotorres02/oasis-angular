import {Component, Input, OnInit} from '@angular/core';
import {ShipmentAddress} from "../../../../interfaces/shipment-address";

@Component({
  selector: 'app-shipment-address',
  templateUrl: './shipment-address.component.html',
  styleUrls: ['./shipment-address.component.css']
})
export class ShipmentAddressComponent implements OnInit{
  @Input() address!: ShipmentAddress;


  remitente!: String;
  dni!: String;
  direccion!: String;
  direccionAux!: String;
  telefono!: String;

  constructor() {

  }
  ngOnInit() {
    this.remitente = this.address.name.concat(" ", this.address.lastName.toString());
    this.dni = this.address.dni;
    this.direccion = this.address.shipmentAddress.concat(", ", this.address.additionalInformation.toString(),);
    this.direccionAux = this.address.population.concat(", ", this.address.zipCode.toString(), ", ", this.address.province.toString());
    this.telefono = this.address.phoneNumber;

    console.log(this.address);
  }
}
