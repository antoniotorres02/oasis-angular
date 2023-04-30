import { Component,inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-montar-pc',
  templateUrl: './montar-pc.component.html',
  styleUrls: ['./montar-pc.component.css']
})
export class EjemploManejarColecciones {
  firestore: Firestore = inject(Firestore)
  items$: Observable<any[]>;

  //Observers
  procesadores$: Observable<any[]>;
  placasBase$: Observable<any[]>;
  discoDuro$: Observable<any[]>;
  cajas$: Observable<any[]>;
  fuentes$: Observable<any[]>;
  refrigeraciones$: Observable<any[]>;
  tarjetasGraficas$: Observable<any[]>;
  rams$: Observable<any[]>;

  //selected on select
  selectedProcesador: any;
  selectedPlacaBase: any;
  selectedDiscoDuro: any;
  selectedCaja: any;
  selectedFuente: any;
  selectedRefrigeracion: any;
  selectedTarjetaGrafica: any;
  selectedRam: any;
  totalPrice: number = 0;

  constructor() {

    const aCollection = collection(this.firestore, 'componentes')
    this.items$ = collectionData(aCollection);

    //Mapeado de los diferentes tipos
    this.procesadores$ = this.items$.pipe(
      map(items => items.filter(item => item.Tipo === 'Procesador'))
    );
    this.discoDuro$ = this.items$.pipe(
      map(items => items.filter(item => item.Tipo === 'Disco duro'))
    );
    this.placasBase$ = this.items$.pipe(
      map(items => items.filter(item => item.Tipo === 'Placa Base'))
    );
    this.cajas$ = this.items$.pipe(
      map(items => items.filter(item => item.Tipo === 'Caja'))
    );
    this.fuentes$ = this.items$.pipe(
      map(items => items.filter(item => item.Tipo === 'Fuente de alimentacion'))
    );
    this.refrigeraciones$ = this.items$.pipe(
      map(items => items.filter(item => item.Tipo === 'Refrigeracion CPU'))
    );
    this.tarjetasGraficas$ = this.items$.pipe(
      map(items => items.filter(item => item.Tipo === 'Tarjeta grafica'))
    );
    this.rams$ = this.items$.pipe(
      map(items => items.filter(item => item.Tipo === 'RAM'))
    );

    this.placasBase$.subscribe(placasBase => {
      this.selectedPlacaBase = placasBase[0];
    });
    this.procesadores$.subscribe(procesadores => {
      this.selectedProcesador = procesadores[0];
    });
    this.discoDuro$.subscribe(discoDuro => {
      this.selectedDiscoDuro = discoDuro[0];
    });
    this.cajas$.subscribe(cajas => {
      this.selectedCaja = cajas[0];
    });
    this.fuentes$.subscribe(fuentes => {
      this.selectedFuente = fuentes[0];
    });
    this.refrigeraciones$.subscribe(refrigeraciones => {
      this.selectedRefrigeracion = refrigeraciones[0];
    });
    this.tarjetasGraficas$.subscribe(tarjetasGraficas => {
      this.selectedTarjetaGrafica = tarjetasGraficas[0];
    });
    this.rams$.subscribe(rams => {
      this.selectedRam = rams[0];
    });

  }

  //Cuando hay un cambio en el select se actualiza el actual
  onProcesadorChange(event: any) {
    const value = event.target.value;
    this.procesadores$.subscribe(procesadores => {
      this.selectedProcesador = procesadores.find(p => p.Modelo === value);
    });
  }
  onPlacaBaseChange(event: any) {
    const value = event.target.value;
    this.placasBase$.subscribe(placasBase => {
      this.selectedPlacaBase = placasBase.find(p => p.Modelo === value);
    });
  }
  onDiscoDuroChange(event: any) {
    const value = event.target.value;
    this.discoDuro$.subscribe(discoDuro => {
      this.selectedDiscoDuro = discoDuro.find(p => p.Modelo === value);
    });
  }
  onCajaChange(event: any) {
    const value = event.target.value;
    this.cajas$.subscribe(cajas => {
      this.selectedCaja = cajas.find(p => p.Modelo === value);
    });
  }

  onFuenteAlimentacionChange(event: any) {
    const value = event.target.value;
    this.fuentes$.subscribe(fuentes => {
      this.selectedFuente = fuentes.find(p => p.Modelo === value);
    });
  }

  onRefrigeracionCPUChange(event: any) {
    const value = event.target.value;
    this.refrigeraciones$.subscribe(refrigeraciones => {
      this.selectedRefrigeracion = refrigeraciones.find(p => p.Modelo === value);
    });
  }

  onTarjetaGraficaChange(event: any) {
    const value = event.target.value;
    this.tarjetasGraficas$.subscribe(tarjetasGraficas => {
      this.selectedTarjetaGrafica = tarjetasGraficas.find(p => p.Modelo === value);
    });
  }

  onRAMChange(event: any) {
    const value = event.target.value;
    this.rams$.subscribe(Ram => {
      this.selectedRam = Ram.find(p => p.Modelo === value);
    });
  }

  calcularPrecioTotal(): number {
    let precioTotal = 0;
    if (this.selectedProcesador) {
      precioTotal += this.selectedProcesador.Precio;
    }
    if (this.selectedPlacaBase) {
      precioTotal += this.selectedPlacaBase.Precio;
    }
    if (this.selectedDiscoDuro) {
      precioTotal += this.selectedDiscoDuro.Precio;
    }
    if (this.selectedCaja) {
      precioTotal += this.selectedCaja.Precio;
    }
    if (this.selectedFuente) {
      precioTotal += this.selectedFuente.Precio;
    }
    if (this.selectedRefrigeracion) {
      precioTotal += this.selectedRefrigeracion.Precio;
    }
    if (this.selectedTarjetaGrafica) {
      precioTotal += this.selectedTarjetaGrafica.Precio;
    }
    if (this.selectedRam) {
      precioTotal += this.selectedRam.Precio;
    }
    return precioTotal;
  }
}
