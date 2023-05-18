import {EventEmitter, Injectable} from '@angular/core';
  import { MatDialog } from '@angular/material/dialog';
import {NewShippmentAddressComponent} from "../pages/profile/new-shippment-address/new-shippment-address.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  $dialogoAbierto = new EventEmitter<any>();

}
