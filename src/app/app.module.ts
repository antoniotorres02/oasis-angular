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


const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', component:PrincipalComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'form_emp', component:FormempresaComponent},
  {path: 'profile', component: ProfileComponent}
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
    LoginComponent,
    RegisterComponent,
    FormempresaComponent,
    LinkedCardsComponent,
    LoginComponent,
    PrincipalModalComponent,
    CategoriasComponent
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
