import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import {filter, Observable} from 'rxjs';
import { CartService } from '../../services/cart.service';


interface Producto {
  name: string;
  description: string;
  foto:string;
}

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  selectedImg = '';
  productos!: Observable<Producto[]>;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore,private router: Router, private cartService: CartService) { }

  ngOnInit() {

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo(0, 0);
    });

    this.route.paramMap.subscribe(params => {
      this.selectedImg = params.get('img')!;
      this.loadProducts(this.selectedImg); // Llama a la función loadProducts aquí
      this.route.paramMap.subscribe(params => {
        // ...
      });
    });
  }

  addToCart(productName: string, productDescription: string, productPicture: string) {
    this.cartService.addToCart(productName, productDescription, productPicture);
  }

  // Crea la función loadProducts para cargar los productos de la tienda seleccionada
  loadProducts(store: string) {
    let collectionName: string;

    switch (store) {
      case 'FootLocker.svg':
        collectionName = 'footLocker';
        break;
      case 'Zara.svg':
        collectionName = 'Zara';
        break;
      case 'JD.svg':
        collectionName = 'JD';
        break;
      default:
        collectionName = 'Zara';
    }

    this.productos = this.firestore.collection<Producto>(collectionName).valueChanges();

    // Agregar esto para verificar si se están recibiendo los datos correctamente
    this.productos.subscribe(data => {
      console.log('Productos: ', data);
    });
  }

  cards = [
    { title: 'Tarjeta 1', content: 'Contenido 1' },
    { title: 'Tarjeta 2', content: 'Contenido 2' },
    { title: 'Tarjeta 3', content: 'Contenido 3' },
    { title: 'Tarjeta 4', content: 'Contenido 4' },
    { title: 'Tarjeta 5', content: 'Contenido 5' },
    { title: 'Tarjeta 6', content: 'Contenido 6' },
    { title: 'Tarjeta 7', content: 'Contenido 7' },
    { title: 'Tarjeta 8', content: 'Contenido 8' }
  ];
}

