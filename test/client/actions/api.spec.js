import { expect } from 'chai';
import * as constants from 'client/constants/api';
import * as actions from 'client/actions/api';

describe('api actions', () => {
  it('tests submitForm action', () => {
    const data = { name: 'name' };
    const expectedAction = {
      type: constants.SUBMIT_FORM,
      data
    };
    expect(actions.submitForm(data)).to.eql(expectedAction);
  });
  it('tests submitSuccess action', () => {
    const result = { name: 'name' };
    const expectedAction = {
      type: constants.SUBMIT_SUCCESS,
      result
    };
    expect(actions.submitSuccess(result)).to.eql(expectedAction);
  });
  it('tests submitFailed action', () => {
    const error = { error: 'error' };
    const expectedAction = {
      type: constants.SUBMIT_FAILED,
      error
    };
    expect(actions.submitFailed(error)).to.eql(expectedAction);
  });
});
