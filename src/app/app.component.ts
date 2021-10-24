import { Component, Input } from '@angular/core';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public cartCount?: number=0;
  public allProductsList: Product[];
  public selectedProductsIdList: number [];
  public id:number;

  constructor() {
    this.id=0,
    this.allProductsList = [],
    this.selectedProductsIdList = [],

    this.allProductsList.push(new Product(++this.id,'Kamuolys', 10, 'Futbolo kamuolys size 5', '../../../assets/images/kamuolys.png'))
    this.allProductsList.push(new Product(++this.id,'Zoliapjove', 1210, 'Superine mechanine kasilka', '../../../assets/images/zoliapjove.png'))
    this.allProductsList.push(new Product(++this.id,'Lempa', 15,'Led staline lempa', '../../../assets/images/lempa.png'))
    this.allProductsList.push(new Product(++this.id,'Dronas', 110, 'DJI super dronas', '../../../assets/images/dronas.png'))
    this.allProductsList.push(new Product(++this.id,'Kryzius', 3, 'piestas kryzelis NFT', '../../../assets/images/kryzius.png'))
  }

  // public increaseCartCount(): number {
    
  //   console.log('preke prideta', this.cartCount);
  //   // return (this.cartCount!)++
  // }
  public pushProductId(id:number){
    this.selectedProductsIdList.push(id)

    console.log(this.selectedProductsIdList);
    console.log(this.allProductsList);
  }
}
