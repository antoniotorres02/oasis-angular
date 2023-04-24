import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-formempresa',
  templateUrl: './formempresa.component.html',
  styleUrls: ['./formempresa.component.css']
})
export class FormempresaComponent {
  constructor(private firestore: AngularFirestore) { }

  enviarSolicitud() {
    const nombreEmpresa = (<HTMLInputElement>document.getElementById('Cname')).value;
    const emailEmpresa = (<HTMLInputElement>document.getElementById('cemail')).value;
    const numEmpresa = (<HTMLInputElement>document.getElementById('cnum')).value;
    const direccionEmpresa = (<HTMLInputElement>document.getElementById('cdirection')).value;
    const sectorEmpresa = (<HTMLInputElement>document.getElementById('csector')).value;

    // Guardar los datos en la colección "Solicitud_empresas"
    this.firestore.collection('Solicitud_empresas').add({
      nombreEmpresa: nombreEmpresa,
      emailEmpresa: emailEmpresa,
      numEmpresa: numEmpresa,
      direccionEmpresa: direccionEmpresa,
      sectorEmpresa: sectorEmpresa
    })
      .then(() => {
        console.log('Solicitud guardada exitosamente!');
      })
      .catch((error) => {
        console.error('Error al guardar la solicitud: ', error);
      });

    // Limpiar los campos del formulario
    (<HTMLInputElement>document.getElementById('Cname')).value = '';
    (<HTMLInputElement>document.getElementById('cemail')).value = '';
    (<HTMLInputElement>document.getElementById('cnum')).value = '';
    (<HTMLInputElement>document.getElementById('cdirection')).value = '';
    (<HTMLInputElement>document.getElementById('csector')).value = '';
  }

}
