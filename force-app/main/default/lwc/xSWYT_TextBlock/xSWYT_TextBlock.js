import { LightningElement, api } from 'lwc';

export default class XSWYT_TextBlock extends LightningElement {
    @api item;

    get dynamicStyle(){
        console.log('GETTING STYLE FOR ---> '+this.item);
        switch(this.item){
            case 'John Amos':
                return 'slds-badge badge-one';
            default:
                return 'slds-badge badge-two';
        }
    }
}