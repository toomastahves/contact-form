import { expect } from 'chai';
import * as constants from 'client/constants/api';

describe('constants test', () => {
  it('exports form submit constants', () => {
    expect(constants.CREATE_CONTACT_REQUEST).to.equal('CREATE_CONTACT_REQUEST');
    expect(constants.CREATE_CONTACT_SUCCESS).to.equal('CREATE_CONTACT_SUCCESS');
    expect(constants.CREATE_CONTACT_FAILED).to.equal('CREATE_CONTACT_FAILED');
  });
});
