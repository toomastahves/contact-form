import { expect } from 'chai';
import * as constants from 'client/constants/contact';

describe('constants test', () => {
  it('exports form submit constants', () => {
    expect(constants.CREATE_CONTACT_REQUEST).to.equal('CREATE_CONTACT_REQUEST');
    expect(constants.CREATE_CONTACT_SUCCESS).to.equal('CREATE_CONTACT_SUCCESS');
    expect(constants.CREATE_CONTACT_FAILED).to.equal('CREATE_CONTACT_FAILED');
  });
  it('exports form change constants', () => {
    expect(constants.NAME_CHANGE).to.equal('NAME_CHANGE');
    expect(constants.PHONE_CHANGE).to.equal('PHONE_CHANGE');
    expect(constants.EMAIL_CHANGE).to.equal('EMAIL_CHANGE');
    expect(constants.BILLING_ADDRESS_FIELD1_CHANGE).to.equal('BILLING_ADDRESS_FIELD1_CHANGE');
    expect(constants.BILLING_ADDRESS_FIELD2_CHANGE).to.equal('BILLING_ADDRESS_FIELD2_CHANGE');
    expect(constants.BILLING_ADDRESS_FIELD3_CHANGE).to.equal('BILLING_ADDRESS_FIELD3_CHANGE');
    expect(constants.SAME_ADDRESS_CHANGE).to.equal('SAME_ADDRESS_CHANGE');
    expect(constants.SHIPPING_ADDRESS_FIELD1_CHANGE).to.equal('SHIPPING_ADDRESS_FIELD1_CHANGE');
    expect(constants.SHIPPING_ADDRESS_FIELD2_CHANGE).to.equal('SHIPPING_ADDRESS_FIELD2_CHANGE');
    expect(constants.SHIPPING_ADDRESS_FIELD3_CHANGE).to.equal('SHIPPING_ADDRESS_FIELD3_CHANGE');
    expect(constants.ACCEPT_TERMS_CHANGE).to.equal('ACCEPT_TERMS_CHANGE');
  });
});
