import {Component, OnInit, Input, Output, EventEmitter, ViewChild, Compiler, Pipe, PipeTransform} from '@angular/core';
import {PrincipalModalServicioService} from "../../Services/principal-modal-servicio.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {doc, Firestore} from "@angular/fire/firestore";
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
  principalRef = true;
  modalSwitch!:boolean;
  CategoriaSwitch!:boolean;
  dialog!:boolean;
  dialog2!:boolean;
  dialog3!:boolean;
  marco_visible!: boolean;
  marco_visible2!: boolean;
  marco_visible3!: boolean;
  tiendas_fav!:string[];
  principal!:boolean;
  user: any;

  signedOut!:boolean;

  nombreUser ="Identifícate";
  registrationDate?: string;
  wishlistCount?: string;
  orderCount?: string;
  ordersInProgress?: string;
  actualuser$: Observable<any[]> | null = null; // inicializando con null

  html!: string; //ejemplo para escribir html desde el propio ts
  data!:string;

  constructor(private modal:PrincipalModalServicioService, public auth: AngularFireAuth, private firestore: Firestore, private router: Router) {
    this.auth.authState.subscribe(user => {
      console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getUserData(this.user);
      }
    });

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
    this.getMessage(this.html);

    this.modal.data$.subscribe((valor) => {this.data = valor});
  }

  //funcion que modifique los parametros del firebase para las tiendas_fav

  getMessage(event:string){
    return this.html = event;
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


  async getUserData(user: any) {
    const userDocRef = doc(this.firestore, `Usuarios/${user?.uid}`);
    const userDocCardsRef = doc(this.firestore, `Usuarios/${user?.uid}/cards/cardsList`);

    const userDocSnapshot = await getDoc(userDocRef);
    const userDocCardShot = await getDoc(userDocCardsRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const userCard:any =  userDocCardShot.data();

      console.log(userData);

      this.nombreUser = userData["usuario"];
      this.registrationDate = userData["registrationDate"];
      this.wishlistCount = userData["wishlist"];
      this.orderCount = userData["orderCount"];
      this.ordersInProgress = userData["ordersInProgress"];
      this.tiendas_fav = userData["favStore"];

    } else {
      console.log('El usuario no existe.');
    }
  }



  async signOut() {
    await this.auth['signOut']();
    this.signedOut = true;
    location.reload();
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
