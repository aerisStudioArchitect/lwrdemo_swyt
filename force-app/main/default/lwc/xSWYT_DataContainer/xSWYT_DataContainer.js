import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

const fields = [
    'Account.Name',
    'Account.Type',
    'Account.Phone'
];

export default class XSWYT_DataContainer extends LightningElement {
    @api recordId;
    @api variable;

    @wire(getRecord,{recordId:'$recordId', fields}) myRecord;
}