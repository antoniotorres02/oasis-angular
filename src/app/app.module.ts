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
import { PrincipalModalComponent } from './pages/principal/principal-modal/principal-modal.component';


const appRoute: Routes = [
  {path: '', redirectTo:'Home', pathMatch:'full'},
  {path: 'Home', component:PrincipalComponent},
  {path: 'login', component:LoginComponent}
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
    LoginComponent,
    PrincipalModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
