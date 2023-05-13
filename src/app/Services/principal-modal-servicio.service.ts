import {EventEmitter, Injectable} from '@angular/core';
import {PrincipalModalComponent} from "../pages/principal/principal-modal/principal-modal.component";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PrincipalModalServicioService {
  //servicios para vartiables booleanas
  $modal = new EventEmitter<any>();
  $modal_Cat = new EventEmitter<any>();
  $modal_dialog = new EventEmitter<any>();
  $modal_dialog2 = new EventEmitter<any>();
  $modal_dialog3 = new EventEmitter<any>();
  $modal_marco = new EventEmitter<any>();
  $modal_marco2 = new EventEmitter<any>();
  $modal_marco3 = new EventEmitter<any>();

  //servicios para varianbles no booleanas

  private data = new Subject<string>();
  data$ = this.data.asObservable();

  setData(valor: string){
    this.data.next(valor);
  }

}
