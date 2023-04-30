import {EventEmitter, Injectable} from '@angular/core';
import {PrincipalModalComponent} from "../pages/principal/principal-modal/principal-modal.component";

@Injectable({
  providedIn: 'root'
})
export class PrincipalModalServicioService {

  $modal = new EventEmitter<any>();
  $modal_Cat = new EventEmitter<any>();

}
