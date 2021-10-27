export class Item {
    public id: number;
    public name: string;
    public price: number;
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
        this.id = id;
        this.name = name;
        this.price = price;
        this.shortDesc = shortDesc;
        this.imgURL = imgURL;
        this.discount = discount;
    }

    public get discountedPrice(): number {
        return this.price - ((this.discount*this.price)/100);
    }

}
