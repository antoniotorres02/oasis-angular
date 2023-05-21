import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent} from "./pages/login/login.component";
import { ShopComponent } from './pages/shop/shop.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersInProgressComponent } from './pages/profile/orders-in-progress/orders-in-progress.component';
import {RouterModule, ROUTES, Routes} from "@angular/router";
import {RegisterComponent} from "./pages/register/register.component";
import {FormempresaComponent} from "./pages/formempresa/formempresa.component";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { CompletedOrdersComponent } from './pages/profile/completed-orders/completed-orders.component';
import { WishlistComponent } from './pages/profile/wishlist/wishlist.component';
import { SQueriesComponent } from './pages/profile/s-queries/s-queries.component';
import { ProfileDataComponent } from './pages/profile/profile-data/profile-data.component';
import { LinkedCardsComponent } from './pages/profile/linked-cards/linked-cards.component';
import { PrincipalModalComponent } from './pages/principal/principal-modal/principal-modal.component';
import { CategoriasComponent } from './pages/principal/categorias/categorias.component';
import {DialogoComponent} from "./pages/principal/dialogo/dialogo.component";
import { CheckoutComponent } from './pages/checkout/checkout.component';
import {ShopsupportComponent} from "./pages/manager/subpages/shopsupport/shopsupport.component";
import {MyinfoComponent} from "./pages/manager/subpages/myinfo/myinfo.component";
import {ShopapiComponent} from "./pages/manager/subpages/shopapi/shopapi.component";
import {MyshopComponent} from "./pages/manager/subpages/myshop/myshop.component";
import {OrdersComponent} from "./pages/manager/subpages/orders/orders.component";
import {ManagerComponent} from "./pages/manager/manager.component";
import { HttpClientModule } from '@angular/common/http';
import { ShoploginComponent } from "./pages/shoplogin/shoplogin.component";
import {FormsModule} from "@angular/forms";
import { MarcosComponent } from './pages/principal/marcos/marcos.component';
import { MyproductsComponent } from './pages/manager/subpages/myproducts/myproducts.component';


import { ShipmentAddressComponent } from './pages/profile/shipment-address/shipment-address.component';
import { NewShippmentAddressComponent } from './pages/profile/new-shippment-address/new-shippment-address.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarMarcoComponent } from './pages/principal/editar-marco/editar-marco.component';
import { OpcionesTarjetaComponent } from './pages/profile/opciones-tarjeta/opciones-tarjeta.component';
import { EditarTarjetaComponent } from './pages/profile/editar-tarjeta/editar-tarjeta.component';
import { AddTarjetasComponent } from './pages/profile/add-tarjetas/add-tarjetas.component';





import { CartService} from "./Services/cart.service";


const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', component:PrincipalComponent},
  {path: 'shop', component:ShopComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'form_emp', component:FormempresaComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'cart', component:CartComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'shop_login', component:ShoploginComponent},
  { path: 'manager', component: ManagerComponent, children: [
      {path: 'orders', component: OrdersComponent},
      {path: 'myshop', component: MyshopComponent},
      {path: 'myinfo', component: MyinfoComponent},
      {path: 'shopsupport', component: ShopsupportComponent},
      {path: 'shopapi', component: ShopapiComponent},
      {path: 'myproducts', component: MyproductsComponent}
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
    OrdersInProgressComponent,
    CompletedOrdersComponent,
    WishlistComponent,
    SQueriesComponent,
    ProfileDataComponent,
    CartComponent,
    ManagerComponent,
    OrdersComponent,
    MyshopComponent,
    MyinfoComponent,
    ShopsupportComponent,
    ShopapiComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    FormempresaComponent,
    LoginComponent,
    RegisterComponent,
    FormempresaComponent,
    LinkedCardsComponent,
    LoginComponent,
    PrincipalModalComponent,
    CategoriasComponent,
    DialogoComponent,
    CheckoutComponent,
    ShoploginComponent,
    EditarMarcoComponent,
    MarcosComponent,
    ShipmentAddressComponent,
    NewShippmentAddressComponent,
    OpcionesTarjetaComponent,
    EditarTarjetaComponent,
    AddTarjetasComponent,
    OpcionesTarjetaComponent,
    NewShippmentAddressComponent
    MyproductsComponent,

  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoute),
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        HttpClientModule,
        AngularFireAuthModule,
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideFirestore(() => getFirestore()),
        FormsModule,
        BrowserAnimationsModule
    ],
  providers: [CartService],
  bootstrap: [AppComponent]
})

export class AppModule {

}
