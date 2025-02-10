import { LightningElement,api, track } from 'lwc';
import isGuestUser from "@salesforce/user/isGuest";
import userId from '@salesforce/user/Id';
import COMMUNITY_ID from '@salesforce/community/Id';
import sitePath from "@salesforce/community/basePath";

/** UNCOMMENT THE FOLLOWING LINE TO ENABLE APEX CONTROLLER FOR WISHLIST FUNCTIONALITY */
//import addProductToWishlist from '@salesforce/apex/WishlistButtonController';

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

    /**
     * Update component to call this function when used with an environment where Commerce is enabled
     * 
     */
    async addProductToWishlist(){
        //console.log('await addToWishlist('+this.recordId+','+COMMUNITY_ID+','+this.accountId+','+this.userId+');');
        //console.log('calling apex method');

        //call Apex method to add product to wishlist using the ConnectApi
        await addToWishlist({prodId: this.recordId, communityId: COMMUNITY_ID,acctId: this.accountId,userId: this.userId})
            .then((result) => {
                // handle result
                /* console.log('added to wishlist');
                console.log(result);*/
                if(result){
                    var ProductURLVar = '/'+sitePath+'/mylists';
                    var message = 'Product successfully added to wishlist. ';

                    /** TODO: ADD/UPDATE CUSTOM COMPONENT TO SHOW A CONFIRMATION MESSAGE WHEN THE ITEM IS SUCCESSFULLY ADDED TO THE WISHLIST */
                    /** EX: this.template.querySelector('c-custom-toast-cmp').showToast('success',message,ProductURLVar,'View Wishlist'); */
                }
            })
            .catch ((error) => {
                // handle errors
                console.log(error);
                this.error = error;const err = error?.error ?? error;
                //DO NOT ALLOW GUESTS TO ADD ITEMS TO A WISHLIST BECAUSE THEY DO NOT HAVE A WISHLIST
                if (err?.code === 'GUEST_INSUFFICIENT_ACCESS') {
                    navigate(this.navContext, loginPage);
                } else{
                    /** TODO: HANDLE ERROR TO SHOW RELEVANT MESSAGING WHEN THE ITEMS IS NOT SUCCESSFULLY ADDED TO THE WISHLIST */
                    /** EX: this.template.querySelector('c-x-studio-_-custom-toast-cmp').showToast('Error', error.message,null,null); */
                }
            });
    }
}