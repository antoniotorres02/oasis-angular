import {Component, OnInit, Input, Output, EventEmitter, ViewChild, Compiler, Pipe, PipeTransform} from '@angular/core';
import {PrincipalModalServicioService} from "../../Services/principal-modal-servicio.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {doc, Firestore, setDoc} from "@angular/fire/firestore";
import {filter, Observable} from "rxjs";
import {getDoc} from "firebase/firestore";
import {NavigationEnd, Router} from "@angular/router";
import {DomSanitizer} from "@angular/platform-browser";





@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],

})


export class PrincipalComponent implements OnInit{

  @Output() principalRefChange = new EventEmitter<boolean>();
  modalSwitch!:boolean;
  CategoriaSwitch!:boolean;
  dialog!:boolean;
  dialog2!:boolean;
  dialog3!:boolean;
  marco_visible!: boolean;
  marco_visible2!: boolean;
  marco_visible3!: boolean;
  principal!:boolean;
  user: any;

  signedOut!:boolean;

  nombreUser!:string;
  tiendas_fav!:string[];
  editarMarco!:boolean;

  constructor(private modal:PrincipalModalServicioService, public auth: AngularFireAuth, private firestore: Firestore, private router: Router) {

  }

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });
    this.modal.$modal.subscribe((valor) => {this.modalSwitch = valor});
    this.modal.$modal_Cat.subscribe((valor) => {this.CategoriaSwitch = valor});
    this.modal.$modal_dialog.subscribe((valor) => {this.dialog = valor});
    this.modal.$modal_dialog2.subscribe((valor) => {this.dialog2 = valor});
    this.modal.$modal_dialog3.subscribe((valor) => {this.dialog3 = valor});
    this.modal.$modal_marco.subscribe((valor) => {this.marco_visible = valor});
    this.modal.$modal_marco2.subscribe((valor) => {this.marco_visible2 = valor});
    this.modal.$modal_marco3.subscribe((valor) => {this.marco_visible3 = valor});
    this.signedOut = false;

    this.modal.obtenerNombreUser().subscribe(valor => {this.nombreUser = valor});
    this.modal.obtenerFavStore().subscribe(valor => {this.tiendas_fav = valor});
    this.modal.$editarMarco.subscribe(valor => {this.editarMarco=valor});
  }



  openModal(){
    this.modalSwitch = true;
  }

  openCategoria(){
    this.CategoriaSwitch = true;
  }
  closeCaetegoria(){
    this.modal.$modal_Cat.emit(false);
  }

  openDialog(event:Event){
    switch ((event.target as HTMLAnchorElement).id) {
      case "1":{
        this.modal.$modal_dialog.emit(true);
        this.modal.$modal_marco.emit(true);
        break;
      }
      case "2":{
        this.modal.$modal_dialog2.emit(true);
        this.modal.$modal_marco2.emit(true);
        break;
      }
      case "3":{
        this.modal.$modal_dialog3.emit(true);
        this.modal.$modal_marco3.emit(true);
        break;
      }
    }

  }

}
