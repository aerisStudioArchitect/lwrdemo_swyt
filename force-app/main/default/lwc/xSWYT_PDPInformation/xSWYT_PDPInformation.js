import { LightningElement, api } from 'lwc';

export default class XSWYT_PDPInformation extends LightningElement {
    @api productId;
    @api Item;
    prod = this.productId;
}