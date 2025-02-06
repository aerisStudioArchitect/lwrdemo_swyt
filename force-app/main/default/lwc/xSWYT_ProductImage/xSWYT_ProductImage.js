import { LightningElement, api, track } from 'lwc';

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
}