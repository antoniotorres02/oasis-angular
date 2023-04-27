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
import {RouterModule, ROUTES, Routes} from "@angular/router";
import {RegisterComponent} from "./pages/register/register.component";
import {FormempresaComponent} from "./pages/formempresa/formempresa.component";
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from './environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import {ShopsupportComponent} from "./pages/manager/subpages/shopsupport/shopsupport.component";
import {MyinfoComponent} from "./pages/manager/subpages/myinfo/myinfo.component";
import {ShopapiComponent} from "./pages/manager/subpages/shopapi/shopapi.component";
import {MyshopComponent} from "./pages/manager/subpages/myshop/myshop.component";
import {OrdersComponent} from "./pages/manager/subpages/orders/orders.component";
import {ManagerComponent} from "./pages/manager/manager.component";





const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', component:PrincipalComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'form_emp', component:FormempresaComponent},
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
    ShopapiComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
    FormempresaComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
