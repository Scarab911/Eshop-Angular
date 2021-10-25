import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public cartCount?: number=0;
  public allProductsList: Item[];
  public selectedProductsIdList: number [];
  public id:number;

  constructor() {
    this.id=0,
    this.allProductsList = [],
    this.selectedProductsIdList = [],

    this.allProductsList.push(new Item(++this.id,'Kamuolys', 10, 'Futbolo kamuolys size 5', '../../../assets/images/kamuolys.png',0))
    this.allProductsList.push(new Item(++this.id,'Zoliapjove', 1210, 'Superine mechanine kasilka', '../../../assets/images/zoliapjove.png',50))
    this.allProductsList.push(new Item(++this.id,'Lempa', 15,'Led staline lempa', '../../../assets/images/lempa.png',0))
    this.allProductsList.push(new Item(++this.id,'Dronas', 110, 'DJI super dronas', '../../../assets/images/dronas.png',0))
    this.allProductsList.push(new Item(++this.id,'Kryzius', 3, 'piestas kryzelis NFT', '../../../assets/images/kryzius.png',0))
  }

  public pushProductId(id:number){
    this.selectedProductsIdList.push(id)
  }

    ngOnInit(): void {
    
  }
}
