import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {WatchService} from "../watches/watch.service";

const createOrderUrl = 'http://localhost:3000/orders/create';
const getMineUrl = 'http://localhost:3000/orders/mine/' + localStorage.getItem('userId');

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient,
              private router: Router,
              private watchService: WatchService) {
  }

  createOrder() {
    let watches = JSON.parse(localStorage.getItem('cart'));
    let data  = {
      watches,
      userId: localStorage.getItem('userId'),
      price: this.watchService.calculateAllPrice()
    };
    localStorage.cart = "";
    return this.http.post(createOrderUrl, data);
  }

  getMine(){
    return this.http.get(getMineUrl);
  }
}
