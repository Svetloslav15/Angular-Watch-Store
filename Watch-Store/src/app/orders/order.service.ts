import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {WatchService} from "../watches/watch.service";

const createOrderUrl = 'http://localhost:3000/orders/create';
const pendingUrl = 'http://localhost:3000/orders/get/pending';
const archivedUrl = 'http://localhost:3000/orders/get/archived';
const detailsUrl = 'http://localhost:3000/orders/get/';
const getMineUrl = 'http://localhost:3000/orders/mine/' + localStorage.getItem('userId');
const archiveOrderUrl = 'http://localhost:3000/orders/archive/';
const pendOrderUrl = 'http://localhost:3000/orders/pend/';

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
    let data = {
      watches,
      userId: localStorage.getItem('userId'),
      price: this.watchService.calculateAllPrice()
    };
    localStorage.cart = "";
    return this.http.post(createOrderUrl, data);
  }

  getMine() {
    return this.http.get(getMineUrl);
  }

  giveDetails(id) {
    return this.http.get(detailsUrl + id);
  }

  getPendingOrders() {
    return this.http.get(pendingUrl);
  }

  getArchivedOrders() {
    return this.http.get(archivedUrl);
  }

  archiveOrder(id) {
    this.http.post(archiveOrderUrl + id, "")
      .subscribe((data) => {
        this.router.navigate(['/administration/orders/archived']);
      });
  }

  pendOrder(id) {
    this.http.post(pendOrderUrl + id, "")
      .subscribe((data) => {
        this.router.navigate(['/administration/orders/pending']);
      });
  }
}
