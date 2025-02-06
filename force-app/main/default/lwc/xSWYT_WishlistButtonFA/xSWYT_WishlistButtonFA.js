import { LightningElement,api, track } from 'lwc';

export default class XSWYT_WishlistButtonFA extends LightningElement {
    @api productId;
    @api addedColor;
    @track productInWishlist;

    get addedProductStyle(){
        //console.log(this.addedColor);
        return 'color:'+this.addedColor+';';
    }

    addProduct(){
        console.log('adding product...');
        //add functionality to add product to wishlist here
        this.productInWishlist = true;
    }

    removeProduct(){
        console.log('removing product...');
        //add functionality to remove product from wishlist
        this.productInWishlist = false;
    }
}