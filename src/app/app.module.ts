import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './pages/shop/shop.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { ManagerComponent } from './pages/manager/manager.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import { OrdersComponent } from './src/app/subpages/orders/orders.component';
import { MyshopComponent } from './src/app/subpages/myshop/myshop.component';
import { MyinfoComponent } from './src/app/subpages/myinfo/myinfo.component';
import { ShopsupportComponent } from './src/app/subpages/shopsupport/shopsupport.component';
import { ShopapiComponent } from './src/app/subpages/shopapi/shopapi.component';


const routes: Routes = [
  { path: 'manager', component: ManagerComponent, children: [
      {path: 'orders', component: OrdersComponent},
      {path: 'myshop', component: MyshopComponent},
      {path: 'myinfo', component: MyinfoComponent},
      {path: 'shopsupport', component: ShopsupportComponent},
      {path: 'shopapi', component: ShopapiComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShopComponent,
    PrincipalComponent,
    ProfileComponent,
    CartComponent,
    ManagerComponent,
    OrdersComponent,
    MyshopComponent,
    MyinfoComponent,
    ShopsupportComponent,
    ShopapiComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
