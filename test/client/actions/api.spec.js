import { expect } from 'chai';
import * as constants from 'client/constants/contact';
import * as actions from 'client/actions/api';

describe('api actions', () => {
  it('tests createContactSuccess action', () => {
    const result = { name: 'name' };
    const expectedAction = {
      type: constants.CREATE_CONTACT_SUCCESS,
      result
    };
    expect(actions.createContactSuccess(result)).to.eql(expectedAction);
  });
  it('tests createContactFailed action', () => {
    const error = { error: 'error' };
    const expectedAction = {
      type: constants.CREATE_CONTACT_FAILED,
      error
    };
    expect(actions.createContactFailed(error)).to.eql(expectedAction);
  });
});
