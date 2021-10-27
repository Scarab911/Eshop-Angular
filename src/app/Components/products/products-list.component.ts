import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor(public allProductsList: Item[]=[],
              public selectedProductsIdList: number []=[],
              ) {
  
    this.allProductsList.push(new Item(5,'Kamuolys', 10, 'Futbolo kamuolys size 5', '../../../assets/images/kamuolys.png', 0));
    this.allProductsList.push(new Item(1,'Zoliapjove', 1210, 'Superine mechanine kasilka', '../../../assets/images/zoliapjove.png', 50));
    this.allProductsList.push(new Item(53,'Lempa', 15,'Led staline lempa', '../../../assets/images/lempa.png', 0));
    this.allProductsList.push(new Item(256,'Dronas', 110, 'DJI super dronas', '../../../assets/images/dronas.png', 0));
    this.allProductsList.push(new Item(414,'Kryzius', 3, 'piestas kryzelis NFT', '../../../assets/images/kryzius.png', 0));
  }

  public pushProductId(id:number): void {
    this.selectedProductsIdList.push(id)
  }

  public removeProductId(id:number): void {

    const indexOfItem = this.selectedProductsIdList.indexOf(id);

    if(indexOfItem !== -1){
      this.selectedProductsIdList.splice(indexOfItem, 1);
    }  

  }

  ngOnInit(): void {
  
  }
}
