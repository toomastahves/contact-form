import { expect } from 'chai';
import * as constants from 'client/constants/api';

describe('constants test', () => {
  it('exports form submit constants', () => {
    expect(constants.SUBMIT_FORM).to.equal('SUBMIT_FORM');
    expect(constants.SUBMIT_SUCCESS).to.equal('SUBMIT_SUCCESS');
    expect(constants.SUBMIT_FAILED).to.equal('SUBMIT_FAILED');
  });
});
