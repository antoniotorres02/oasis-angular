import { Component } from '@angular/core';
import {DialogService} from "../../../Services/dialog-service.service";

@Component({
  selector: 'app-new-shippment-address',
  templateUrl: './new-shippment-address.component.html',
  styleUrls: ['./new-shippment-address.component.css']
})
export class NewShippmentAddressComponent {
  constructor(private dialogService: DialogService) {}

  onCancel() {
    // Cierra el diálogo sin guardar los datos
    this.dialogService.$dialogoAbierto.emit(false);
  }
}
