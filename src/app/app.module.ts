import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { ShopComponent } from './pages/shop/shop.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrdersInProgressComponent } from './pages/profile/orders-in-progress/orders-in-progress.component';

import { RouterModule } from "@angular/router";
import { CompletedOrdersComponent } from './pages/profile/completed-orders/completed-orders.component';
import { WishlistComponent } from './pages/profile/wishlist/wishlist.component';
import { SQueriesComponent } from './pages/profile/s-queries/s-queries.component';
import { ProfileDataComponent } from './pages/profile/profile-data/profile-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ShopComponent,
    PrincipalComponent,
    ProfileComponent,
    CartComponent,
    OrdersInProgressComponent,
    CompletedOrdersComponent,
    WishlistComponent,
    SQueriesComponent,
    ProfileDataComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
