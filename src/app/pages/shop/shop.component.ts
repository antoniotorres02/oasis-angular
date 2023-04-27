import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  selectedImg = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedImg = params.get('img')!;
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
