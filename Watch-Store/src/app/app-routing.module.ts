import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import * as path from "path";
import {RegisterComponent} from "./authentication/register/register.component";
import {MainComponent} from "./home/main/main.component";
import {LoginComponent} from "./authentication/login/login.component";
import {WatchesAllComponent} from "./watches/watches-all/watches-all.component";
import {CartComponent} from "./watches/cart/cart.component";
import {DetailsWatchComponent} from "./watches/details-watch/details-watch.component";
import {FavouriteComponent} from "./watches/favourite/favourite.component";
import {MyordersComponent} from "./orders/myorders/myorders.component";
import {CreateWatchComponent} from "./watches/create-watch/create-watch.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'shop', component: WatchesAllComponent},
  {path: 'cart', component: CartComponent},
  {path: 'watches/details/:id', component: DetailsWatchComponent},
  {path: 'favourite', component: FavouriteComponent},
  {path: 'orders/mine/:id', component: MyordersComponent},
  {path: 'administration/watch/add', component: CreateWatchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
