import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public product?: Product;
//   @Input()
//   public name?: string;
//   @Input()
// public count?: number;

  constructor() { 
  }

  ngOnInit(): void {
    
  }

}
