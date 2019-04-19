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
import {PendingComponent} from "./orders/pending/pending.component";
import {ArchivedComponent} from "./orders/archived/archived.component";
import {DetailsComponent} from "./orders/details/details.component";
import {EditComponent} from "./watches/edit/edit.component";
import {AuthGuard} from "./authentication/auth.guard";
import {AdminGuard} from "./authentication/admin.guard";
import {RestrictedGuard} from "./authentication/restricted.guard";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: MainComponent},
  {path: 'home', pathMatch: 'full', component: MainComponent},
  {path: 'register', component: RegisterComponent, canActivate: [RestrictedGuard]},
  {path: 'login', component: LoginComponent, canActivate: [RestrictedGuard]},
  {path: 'shop', component: WatchesAllComponent},
  {path: 'cart', component: CartComponent, canActivate: [AuthGuard]},
  {path: 'watches/details/:id', component: DetailsWatchComponent, canActivate: [AuthGuard]},
  {path: 'favourite', component: FavouriteComponent, canActivate: [AuthGuard]},
  {path: 'orders/mine/:id', component: MyordersComponent, canActivate: [AuthGuard]},
  {path: 'administration/watch/add', component: CreateWatchComponent, canActivate: [AdminGuard]},
  {path: 'administration/orders/pending', component: PendingComponent, canActivate: [AdminGuard]},
  {path: 'administration/orders/archived', component: ArchivedComponent, canActivate: [AdminGuard]},
  {path: 'orders/get/:id', component: DetailsComponent, canActivate: [AuthGuard]},
  {path: 'watches/edit/:id', component: EditComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
