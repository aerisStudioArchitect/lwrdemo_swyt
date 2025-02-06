import { LightningElement, api, track } from 'lwc';

export default class XSWYT_WishlistButton extends LightningElement {
    @api productId;
    @track addedToWishlist;

    addProductToWishlist(){
        console.log('adding product to wishlist');
        console.log(productId);
        this.addedToWishlist = true;
    }

    removeProductFromWishlist(){
        console.log('removing product from wishlist');
        this.addedToWishlist = false;
    }
}