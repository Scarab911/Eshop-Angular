export class Item {
    public id: number;
    public name: string;
    public price: number;
    public count: number;
    public discount: number;
    public shortDesc: string;
    public imgURL: string;

    public constructor(id:number,
                        name: string,
                        price: number,
                        shortDesc: string,
                        imgURL: string,
                        discount: number
                        ){
        this.id = id,
        this.name = name,
        this.price = price,
        this.count = 0,
        this.shortDesc = shortDesc,
        this.imgURL = imgURL,
        this.discount = discount
    }

    public addItem(): number {
    return this.count++;
    }

    public removeItem(): number {
    return this.count--;
    }

    public get discountedPrice(): number {
        return this.price - ((this.discount!*this.price)/100);
    }

}
