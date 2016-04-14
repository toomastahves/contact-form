import { expect } from 'chai';
import * as constants from 'client/constants/api';
import * as actions from 'client/actions/api';

describe('api actions', () => {
  it('tests submitForm action', () => {
    const data = { name: 'name' };
    const expectedAction = {
      type: constants.CREATE_CONTACT_REQUEST,
      data
    };
    expect(actions.createContactRequest(data)).to.eql(expectedAction);
  });
  it('tests submitSuccess action', () => {
    const result = { name: 'name' };
    const expectedAction = {
      type: constants.CREATE_CONTACT_SUCCESS,
      result
    };
    expect(actions.createContactSuccess(result)).to.eql(expectedAction);
  });
  it('tests submitFailed action', () => {
    const error = { error: 'error' };
    const expectedAction = {
      type: constants.CREATE_CONTACT_FAILED,
      error
    };
    expect(actions.createContactFailed(error)).to.eql(expectedAction);
  });
});
