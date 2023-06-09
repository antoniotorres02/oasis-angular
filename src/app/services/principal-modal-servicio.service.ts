import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {PrincipalModalComponent} from "../pages/principal/principal-modal/principal-modal.component";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {doc, Firestore, setDoc, updateDoc} from "@angular/fire/firestore";
import {getDoc} from "firebase/firestore";
import {AngularFirestore, DocumentData} from "@angular/fire/compat/firestore";

interface Usuario {
  favStore: string[];
  lastName: string;
  name: string;
  orderCount: string;
  ordersInProgress:string;
  registrationDate: string;
  usuario: string;
}
@Injectable({
  providedIn: 'root'
})
export class PrincipalModalServicioService{
  //servicios para vartiables booleanas
  $modal = new EventEmitter<any>();
  $modal_Cat = new EventEmitter<any>();
  $modal_dialog = new EventEmitter<any>();
  $modal_dialog2 = new EventEmitter<any>();
  $modal_dialog3 = new EventEmitter<any>();
  $modal_marco = new EventEmitter<any>();
  $modal_marco2 = new EventEmitter<any>();
  $modal_marco3 = new EventEmitter<any>();

  $editarMarco = new EventEmitter<any>();


  editarMarco1 = new BehaviorSubject<boolean>(false);


  editarMarco2 = new BehaviorSubject<boolean>(false);


  editarMarco3 = new BehaviorSubject<boolean>(false);

  //linked Cards
  $dialogo_tarjeta = new BehaviorSubject<boolean[]>([false,false,false,false,false]);
  $editar_tarjeta= new EventEmitter<any>();
  $modal_add_tarjeta = new EventEmitter<any>();

  //servicios para varianbles no booleanas

  private data = new BehaviorSubject<string>('');
  data$ = this.data.asObservable();

  user: any;

  signedOut!:boolean;

  nombreUser = new BehaviorSubject<string>('');
  nombreUser$ = this.nombreUser.asObservable();

  registrationDate?: string;
  wishlistCount?: string;
  orderCount?: string;
  ordersInProgress?: string;
  actualuser$: Observable<any[]> | null = null; // inicializando con null

  html!: string; //ejemplo para escribir html desde el propio ts
  lastName!:string;
  name!:string;
  tiendas_fav = new BehaviorSubject<string[]>([]);
  cards = new BehaviorSubject<DocumentData>([]);

  constructor(public auth: AngularFireAuth, private firestore: Firestore, private firestore2: AngularFirestore) {
    this.auth.authState.subscribe(user => {
      console.log(this.actualuser$);
      this.user = user;
      if (this.user) {
        this.getUserData(this.user);
      }
    });
  }
  async getUserData(user: any) {
    const userDocRef = doc(this.firestore, `Usuarios/${user?.uid}`);
    const userDocCardsRef = doc(this.firestore, `Usuarios/${user?.uid}/cards/cardsList`);

    const userDocSnapshot = await getDoc(userDocRef);
    const userDocCardShot = await getDoc(userDocCardsRef);

    if (userDocSnapshot.exists()) {
      const userData = userDocSnapshot.data();
      const userCard =  userDocCardShot.data();

      console.log(userData);

      this.nombreUser.next(userData["usuario"]);
      this.lastName = userData["lastName"];
      this.name = userData["name"];
      this.registrationDate = userData["registrationDate"];
      this.wishlistCount = userData["wishlist"];
      this.orderCount = userData["orderCount"];
      this.ordersInProgress = userData["ordersInProgress"];
      this.setFavStore(userData["favStore"]);
      this.setCards(userCard);

    } else {
      console.log('El usuario no existe.');
    }
  }

  obtenerNombreUser(){
    return this.nombreUser.asObservable();
  }

  obtenerFavStore(){
    return this.tiendas_fav.asObservable();
  }

  setFavStore(tiendas:string[]){
    this.tiendas_fav.next(tiendas);
  }

  obtenerCards(){
    return this.cards.asObservable();
  }

  setCards(new_card:any){
    this.cards.next(new_card);
  }

  obtenerDialogTarjetas(){
    return this.$dialogo_tarjeta.asObservable();
  }

  setDialogTarjetas(newValor:boolean[]){
    this.$dialogo_tarjeta.next(newValor);
  }

  obtenerEditarMarco1(){
    return this.editarMarco1.asObservable();
  }
  setEditarMarco1(valor:boolean){
    this.editarMarco1.next(valor);
  }

  obtenerEditarMarco2(){
    return this.editarMarco2.asObservable();
  }
  setEditarMarco2(valor:boolean){
    this.editarMarco2.next(valor);
  }
  obtenerEditarMarco3(){
    return this.editarMarco3.asObservable();
  }
  setEditarMarco3(valor:boolean){
    this.editarMarco3.next(valor);
  }

  async signOut() {
    await this.auth['signOut']();
    this.signedOut = true;
    location.reload();
  }

  EditFavStore(tienda:string){
    for(let i = 0; i < this.tiendas_fav.value.length; i++){
      if(this.tiendas_fav.value[i] == this.data.value){
        this.tiendas_fav.value[i] = tienda;
      }
    }

  }

  async addFavStore(tienda:string){
    if(!this.tiendas_fav.value.find(valor => valor == tienda)){
      this.tiendas_fav.value.push(tienda);
    }

  }

  async SubirFavStore(){
    await setDoc(doc(this.firestore, `Usuarios/${this.user.uid}`), {
      favStore: this.tiendas_fav.value,
      lastName: this.lastName,
      name: this.name,
      orderCount: this.orderCount,
      ordersInProgress:this.ordersInProgress,
      registrationDate: this.registrationDate,
      usuario: this.nombreUser.value,
    });
  }

  async Editartarjeta(){
    await setDoc(doc(this.firestore, `Usuarios/${this.user.uid}/cards/cardsList`), {
      card1: this.cards.value["card1"],
      card2: this.cards.value["card2"],
      card3: this.cards.value["card3"],
      card4: this.cards.value["card4"],
      card5: this.cards.value["card5"]
    });
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
