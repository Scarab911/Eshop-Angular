import { Component } from '@angular/core';
import { Product } from './models/product';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public product: Product;
  
  public constructor(){
    this.product = new Product('Xebec', 490)
  }

  public get shortDescription(): string {
    return 'Tri-Screen | Portable Laptop Workstation'
  }

}
