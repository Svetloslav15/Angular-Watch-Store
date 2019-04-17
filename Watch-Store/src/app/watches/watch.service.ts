import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IWatch} from "../home/watch/IWatch";
import {Observable} from "rxjs/index";
import {Router} from "@angular/router";

const getTopThreeUrl = 'http://localhost:3000/watches/get/best/3';
const getWatch = 'http://localhost:3000/watches/get';
const deleteWatchById = 'http://localhost:3000/watches/delete';
const createWatchUrl = 'http://localhost:3000/watches/create';

@Injectable({
  providedIn: 'root'
})
export class WatchService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getTopThree(): Observable<IWatch[]> {
    return this.http.get<IWatch[]>(getTopThreeUrl);
  }

  giveDetails(id): Observable<IWatch> {
    return this.http.get<IWatch>(getWatch + `/${id}`);
  }

  getAll(): Observable<IWatch[]> {
    return this.http.get<IWatch[]>(getWatch + `/all`);
  }

  calculateAllPrice() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let allPrice = 0;
    if (cart != null) {
      cart.forEach(x => {
        allPrice += Number(x.price)
      });
    }
    return allPrice;
  }

  addWatchToCart(id) {
    this.giveDetails(id)
      .subscribe((data) => {
        data = data['data'];

        let cart = JSON.parse(localStorage.getItem('cart'));
        if (cart == null) {
          cart = [];
        }
        let ids = cart.map(x => x._id);
        if (ids.includes(id)) {
          return;
        }
        cart.push(data);
        localStorage.setItem('cart', JSON.stringify(cart));
      })
  }

  addWatchToFavourite(id) {
    this.giveDetails(id)
      .subscribe((data) => {
        data = data['data'];

        let cart = JSON.parse(localStorage.getItem('favourite'));
        if (cart == null) {
          cart = [];
        }
        let ids = cart.map(x => x._id);
        if (ids.includes(id)) {
          return;
        }
        cart.push(data);
        localStorage.setItem('favourite', JSON.stringify(cart));
      })
  }

  removeWatchFromCart(id) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let result = [];

    cart = cart.filter(x => x._id != id);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigate(['shop']);
  }

  removeWatchFromFavourite(id) {
    let cart = JSON.parse(localStorage.getItem('favourite'));
    let result = [];

    cart = cart.filter(x => x._id != id);
    localStorage.setItem('favourite', JSON.stringify(cart));
    this.router.navigate(['shop']);
  }

  deleteWatchById(id) {
    this.http.post(deleteWatchById + `/${id}`, {id})
      .subscribe((data) => {
        this.router.navigate(['']);
      });
  }

  createWatch(data) {
    return this.http.post(createWatchUrl, data);
  }

  navigateToDetails(id) {
    this.router.navigate([`watches/details/${id}`]);
  }
}
