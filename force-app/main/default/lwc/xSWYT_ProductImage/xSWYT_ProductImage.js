import { LightningElement, api, track } from 'lwc';
import isGuestUser from "@salesforce/user/isGuest";
import userId from '@salesforce/user/Id';
import COMMUNITY_ID from '@salesforce/community/Id';
import sitePath from "@salesforce/community/basePath";

/** UNCOMMENT THE FOLLOWING LINE TO ENABLE APEX CONTROLLER FOR WISHLIST FUNCTIONALITY */
//import addProductToWishlist from '@salesforce/apex/WishlistButtonController';

export default class XSWYT_ProductImage extends LightningElement {
    @api imageUrl;
    @api defaultImgUrl;
    @api defaultColor;
    @api addedColor;
    @api iconBkgColor;
    @api showWishlistIcon;
    @api buttonPosition;

    @track productInWishlist;
    @track isPositionOne;
    @track isPositionTwo;
    @track isPositionThree;

    renderedCallback() {
        console.log('buttonPosition => '+this.buttonPosition);
        switch(this.buttonPosition){
            case '1':
                this.isPositionOne = true;
                this.isPositionTwo = false;
                this.isPositionThree = false;
                break;
            case '2':
                this.isPositionOne = false;
                this.isPositionTwo = true;
                this.isPositionThree = false;
                break;
            case '3':
                this.isPositionOne = false;
                this.isPositionTwo = false;
                this.isPositionThree = true;
                break;
            default:
                this.isPositionOne = false;
                this.isPositionTwo = false;
                this.isPositionThree = false;
                break;
        }
    }

    get prodImage(){
        var bgImage;
        if(this.imageUrl){
            bgImage = this.imageUrl;
        } else{
            bgImage = this.defaultImgUrl;
        }
        return 'background: url("' + bgImage + '"); background-size:cover; background-position: center; background-repeat: no-repeat; width:100%; height: 300px;';
    }

    get addedProductStyle(){
        //console.log(this.addedColor);
        return 'color:'+this.addedColor+';';
    }
    
    get defaultBtnStyle(){
        //console.log(this.addedColor);
        return 'color:'+this.defaultColor+';';
    }

    get iconBkgStyle(){
        return 'border-radius:50%;background-color:'+this.iconBkgColor+';';
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