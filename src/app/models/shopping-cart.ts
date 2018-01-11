import { ShoppingCartItem } from "./shopping-cart-item";
import { Product } from "./app-product";

export class ShoppingCart {
    items:ShoppingCartItem[]=[];
    constructor(public itemsMap:{[productId:string]:ShoppingCartItem}) {
        for(let productId in itemsMap){
            let item = itemsMap[productId]
            this.items.push(new ShoppingCartItem(item.product,item.quantity));
        }
    }
    
    get productIds() {
        return Object.keys(this.items);
    }
    
    get totalPrice(){
        let sum = 0;
        this.items.forEach(item => sum+= item.totalPrice);
        return sum;
    }

    getQuantity(product:Product){
        let item = this.itemsMap[product.$key];
        return item ? item.quantity : 0;
    }

    get itemCount(){
        let count = 0;
        for(let productId in this.items)
            count+=this.items[productId].quantity;
        return count;
    }
}
