import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './home/main/main.component';
import {RegisterComponent} from './authentication/register/register.component';
import {LoginComponent} from './authentication/login/login.component';
import {AuthService} from "./authentication/auth.service";
import {JwtInterceptorService} from "./jwt-interceptor.service";
import {ResponseHandlerInterceptorService} from "./response-handler-interceptor.service";
import {ToastrModule} from "ngx-toastr";
import { WatchComponent } from './home/watch/watch.component';
import { WatchesAllComponent } from './watches/watches-all/watches-all.component';
import { CartComponent } from './watches/cart/cart.component';
import { CartWatchComponent } from './watches/cart/cart-watch/cart-watch.component';
import { DetailsWatchComponent } from './watches/details-watch/details-watch.component';
import { FavouriteComponent } from './watches/favourite/favourite.component';
import { FavouriteWatchComponent } from './watches/favourite/favourite-watch/favourite-watch.component';
import { MyordersComponent } from './orders/myorders/myorders.component';
import { OrderCommonComponent } from './orders/order-common/order-common.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    MainComponent,
    RegisterComponent,
    LoginComponent,
    WatchComponent,
    WatchesAllComponent,
    CartComponent,
    CartWatchComponent,
    DetailsWatchComponent,
    FavouriteComponent,
    FavouriteWatchComponent,
    MyordersComponent,
    OrderCommonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule
  ],
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
