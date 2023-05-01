import {EventEmitter, Injectable} from '@angular/core';
import {PrincipalModalComponent} from "../pages/principal/principal-modal/principal-modal.component";

@Injectable({
  providedIn: 'root'
})
export class PrincipalModalServicioService {

  $modal = new EventEmitter<any>();
  $modal_Cat = new EventEmitter<any>();
  $modal_dialog = new EventEmitter<any>();
  $modal_dialog2 = new EventEmitter<any>();
  $modal_dialog3 = new EventEmitter<any>();

}
