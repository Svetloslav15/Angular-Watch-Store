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
import {ToastContainerModule, ToastrModule} from "ngx-toastr";
import { WatchComponent } from './home/watch/watch.component';
import { WatchesAllComponent } from './watches/watches-all/watches-all.component';
import { CartComponent } from './watches/cart/cart.component';
import { CartWatchComponent } from './watches/cart/cart-watch/cart-watch.component';
import { DetailsWatchComponent } from './watches/details-watch/details-watch.component';
import { FavouriteComponent } from './watches/favourite/favourite.component';
import { FavouriteWatchComponent } from './watches/favourite/favourite-watch/favourite-watch.component';
import { MyordersComponent } from './orders/myorders/myorders.component';
import { OrderCommonComponent } from './orders/order-common/order-common.component';
import { CreateWatchComponent } from './watches/create-watch/create-watch.component';
import { PendingComponent } from './orders/pending/pending.component';
import { ArchivedComponent } from './orders/archived/archived.component';
import { DetailsComponent } from './orders/details/details.component';
import { OrderWatchComponent } from './orders/order-watch/order-watch.component';
import { EditComponent } from './watches/edit/edit.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

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
    OrderCommonComponent,
    CreateWatchComponent,
    PendingComponent,
    ArchivedComponent,
    DetailsComponent,
    OrderWatchComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    ToastContainerModule
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
