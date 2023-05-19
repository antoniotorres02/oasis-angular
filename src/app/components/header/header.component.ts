import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {PrincipalComponent} from "../../pages/principal/principal.component";
import {PrincipalModalServicioService} from "../../Services/principal-modal-servicio.service";
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {Firestore, collection, collectionData, doc} from '@angular/fire/firestore';
import {getDoc} from "firebase/firestore";
import {Observable} from "rxjs";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  principal!:boolean;
  user: any;
  signedOut!:boolean;

  nombreUser?: string;
  registrationDate?: string;
  wishlistCount?: string;
  orderCount?: string;
  ordersInProgress?: string;
  actualuser$: Observable<any[]> | null = null; // inicializando con null
  constructor(private translateService: TranslateService, private modal:PrincipalModalServicioService, public auth: AngularFireAuth, private firestore: Firestore) {
    this.auth.authState.subscribe(user => {
      console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getUserData(this.user);
      }
    });
  }

  setLanguage(lang: string) {
    this.translateService.use(lang);
  }
  ngOnInit() {
    this.modal.$modal_Cat.subscribe((valor) => {this.principal = valor});
    this.signedOut = false;
    this.setLanguage('es'); // Establecer español como idioma por defecto

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


    } else {
      console.log('El usuario no existe.');
    }
  }

  openCategoria(){
    this.principal = true;
  }

  closeCaetegoria(){
    this.modal.$modal_Cat.emit(false);
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
