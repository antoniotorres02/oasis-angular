import {Component, Input, OnInit} from '@angular/core';
import {PrincipalModalServicioService} from "../../../Services/principal-modal-servicio.service";

@Component({
  selector: 'app-editar-marco',
  templateUrl: './editar-marco.component.html',
  styleUrls: ['./editar-marco.component.css']
})
export class EditarMarcoComponent implements OnInit{

  marco!:boolean;
  marco2!:boolean;
  marco3!:boolean;
  tiendas_fav!:string[];
  tiendas = ["FootLocker", "Zara", "JD"];
  valorInput!:string;
  constructor(private modal: PrincipalModalServicioService) {


  }

  ngOnInit() {
    this.modal.obtenerFavStore().subscribe(valor => {this.tiendas_fav = valor});
    this.modal.obtenerEditarMarco1().subscribe(valor => {this.marco = valor});
    this.modal.obtenerEditarMarco2().subscribe(valor => {this.marco2 = valor});
    this.modal.obtenerEditarMarco3().subscribe(valor => {this.marco3 = valor});
    console.log(this.marco,this.marco2,this.marco3);
    console.log(this.tiendas_fav);

  }

  editarMarco(){
    if(this.marco){
      const tiendasTmp = this.tiendas_fav;
      if(this.tiendas_fav.includes(this.valorInput)){
        alert("Esa tienda ya existe");
      }else if(this.tiendas.includes(this.valorInput)){
        tiendasTmp[0] = this.valorInput;
        this.modal.setFavStore(tiendasTmp);
        this.modal.SubirFavStore();

      }else{
        alert("No se ha encontrado esa tienda");
      }
      this.modal.setEditarMarco1(false);
    }
    if(this.marco2){
      const tiendasTmp = this.tiendas_fav;
      if(this.tiendas_fav.includes(this.valorInput)){
        alert("Esa tienda ya existe");
      }else if(this.tiendas.includes(this.valorInput)){
        tiendasTmp[1] = this.valorInput;
        this.modal.setFavStore([...new Set(tiendasTmp)]);
        this.modal.SubirFavStore();
      }else{
        alert("No se ha encontrado esa tienda");
      }
      this.modal.setEditarMarco2(false);
    }
    if(this.marco3){
      const tiendasTmp = this.tiendas_fav;
      if(this.tiendas_fav.includes(this.valorInput)){
        alert("Esa tienda ya existe");
      }else if(this.tiendas.includes(this.valorInput)){
        tiendasTmp[2] = this.valorInput;
        this.modal.setFavStore([...new Set(tiendasTmp)]);
        this.modal.SubirFavStore();
      }else{
        alert("No se ha encontrado esa tienda");

      }
      this.modal.setEditarMarco3(false);
    }
  }

  CloseMarco(){
    this.modal.$editarMarco.emit(false);
    this.modal.setEditarMarco3(false);
    this.modal.setEditarMarco2(false);
    this.modal.setEditarMarco1(false);
  }


}
