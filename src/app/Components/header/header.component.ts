import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public allProductsList?: Item[];

  @Input()
  public selectedProductsIdList?: number[];

  @Input()
  public cartCount?:number=0;

  constructor() { 
  }

  ngOnInit(): void {
    
  }

  public get getOrderCount(): number{
    let count=0;
    this.allProductsList?.forEach((product)=>{
      count+=product.count;
    });
    return count;
  }

  public showSelected(): void {
    console.log('tiri riri piri');
    console.log(this.selectedProductsIdList);
  }

}
