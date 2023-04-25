import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-formempresa',
  templateUrl: './formempresa.component.html',
  styleUrls: ['./formempresa.component.css']
})
export class FormempresaComponent {

  constructor(private firestore: AngularFirestore) {

  }

  enviarSolicitud() {

    const nombreEmpresa = (<HTMLInputElement>document.getElementById('Cname')).value;
    const emailEmpresa = (<HTMLInputElement>document.getElementById('cemail')).value;
    const numEmpresa = (<HTMLInputElement>document.getElementById('cnum')).value;
    const direccionEmpresa = (<HTMLInputElement>document.getElementById('cdirection')).value;
    const sectorEmpresa = (<HTMLInputElement>document.getElementById('csector')).value;

    // Guardar los datos en la colección "Solicitud_empresas"
    this.firestore.collection('Solicitud-empresa').add({
      nombreEmpresa: nombreEmpresa,
      emailEmpresa: emailEmpresa,
      numEmpresa: numEmpresa,
      direccionEmpresa: direccionEmpresa,
      sectorEmpresa: sectorEmpresa
    })
      .then(() => {
        alert('Solicitud guardada exitosamente!');
      })
      .catch((error) => {
        alert('Error al guardar la solicitud: ');
      });
  }


}
