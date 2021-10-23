import { Component } from '@angular/core';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 public allProductsList: Product[];

  constructor() {

    this.allProductsList = [];

    this.allProductsList.push(new Product('Kamuolys', 10))
    this.allProductsList.push(new Product('Zoliapjove', 1210))
    this.allProductsList.push(new Product('Staline Lempa', 15))
    this.allProductsList.push(new Product('Dronas', 110))
    this.allProductsList.push(new Product('Kryzius', 3))
   }
}
