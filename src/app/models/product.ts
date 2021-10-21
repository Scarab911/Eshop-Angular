export class Product {
    public name: string;
    public price: number;
    public count: number;
    public discount: number;

    public constructor(name: string, price: number){
        this.name = name,
        this.price = price,
        this.count = 0,
        this.discount = 50
    }

    public addItem(): number {
    return this.count++;
    }

    public removeItem(): number {
    return this.count--;
    }

    public get discountedPrice(): number {
        return this.price - ((this.discount*this.price)/100);
    }

     private setDiscount(count: number): number {
         if (count > 5) {
             this.discount = 20;
         }
         return this.discount;
     }
}
