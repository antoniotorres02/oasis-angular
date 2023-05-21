import { Component } from '@angular/core';
import {DialogService} from "../../../Services/dialog-service.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {doc, Firestore, setDoc, updateDoc} from "@angular/fire/firestore";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Observable} from "rxjs";
import {ShipmentAddress} from "../../../../interfaces/shipment-address";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-shippment-address',
  templateUrl: './new-shippment-address.component.html',
  styleUrls: ['./new-shippment-address.component.css']
})
export class NewShippmentAddressComponent {
  user: any;
  actualuser$: Observable<any[]> | null = null; // inicializando con null



  constructor(private router: Router,private dialogService: DialogService, public auth: AngularFireAuth, private firestore: Firestore, private firestore2: AngularFirestore) {
    this.auth.authState.subscribe(user => {
      //console.log(this.actualuser$);
      this.user = user;

    });

  }

  onCancel() {
    // Cierra el diálogo sin guardar los datos
    this.dialogService.$dialogoAbierto.emit(false);

  }

  onReload() {

    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/profile']);
    });
  }

  saveData() {
    const formData: { [key: string]: string } = {
      name: (document.getElementById('name') as HTMLInputElement)?.value,
      lastName: (document.getElementById('lastName') as HTMLInputElement)?.value,
      dni: (document.getElementById('dni') as HTMLInputElement)?.value,
      phoneNumber: (document.getElementById('phoneNumber') as HTMLInputElement)?.value,
      alias: (document.getElementById('alias') as HTMLInputElement)?.value,
      shipmentAddress: (document.getElementById('shipmentAddress') as HTMLInputElement)?.value,
      additionalInformation: (document.getElementById('additionalInformation') as HTMLInputElement)?.value,
      zipCode: (document.getElementById('zipCode') as HTMLInputElement)?.value,
      population: (document.getElementById('population') as HTMLInputElement)?.value,
      province: (document.getElementById('province') as HTMLInputElement)?.value,
    };

    const errorMessage = document.getElementById('errorMessage');
    if (errorMessage) {
      errorMessage.textContent = ''; // Reset error message

      const missingFields = Object.keys(formData).filter((key) => formData[key] === '');
      if (missingFields.length > 0) {
        errorMessage.textContent = 'Por favor, complete todos los campos.';
      } else {
        const dataArray = Object.values(formData);
        console.log(dataArray); // Aquí puedes hacer lo que desees con el array de strings (por ejemplo, pasarlo a Angular)
        this.subirDireccion(dataArray);
        this.onReload();
      }
    }


  }

  async subirDireccion(direccion: String[]){
    const randomInt = Math.floor(Math.random() * 10000);
    await updateDoc(doc(this.firestore, `Usuarios/${this.user?.uid}/cards/shippingAddresses`), {
      [randomInt]:direccion
    });
  }


}
