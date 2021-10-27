import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input()
    public product!: Item;
  @Input()
    public allProductsList!: Item[];
  @Input()
    public selectedProductsIdList!: number[];

  @Output()
    public pushId: EventEmitter<void>;

  @Output()
    public onAddToCart: EventEmitter<number>;
  
  @Output()
    public onRemoveFromCart: EventEmitter<number>;

  constructor() {
    this.pushId = new EventEmitter<void>();
    this.onAddToCart = new EventEmitter<number>();
    this.onRemoveFromCart = new EventEmitter<number>();
  }

  ngOnInit(): void {
    
  }

}
