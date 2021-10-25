import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

@Input()
  public product?: Item;

@Output()
public pushId: EventEmitter<void>;

  constructor() {
    this.pushId = new EventEmitter<void>()
   }

  ngOnInit(): void {
    
  }

}
