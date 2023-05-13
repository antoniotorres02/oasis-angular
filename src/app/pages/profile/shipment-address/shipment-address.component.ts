import {Component, Input} from '@angular/core';
import {ShipmentAddress} from "../../../../interfaces/shipment-address";

@Component({
  selector: 'app-shipment-address',
  templateUrl: './shipment-address.component.html',
  styleUrls: ['./shipment-address.component.css']
})
export class ShipmentAddressComponent {
  @Input() addresses: ShipmentAddress[] = [];
}
