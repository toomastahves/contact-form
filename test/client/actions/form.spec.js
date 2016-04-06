import { expect } from 'chai';
import * as constants from 'client/constants/form';
import * as actions from 'client/actions/form';

describe('form actions', () => {
  it('tests nameChange action with incorrect name', () => {
    const value = 'na';
    const name = {
      error: 'Nimi liiga lühike',
      value,
      valid: false,
      touched: true
    };
    const expectedAction = {
      type: constants.NAME_CHANGE,
      name
    };
    expect(actions.nameChange(value)).to.eql(expectedAction);
  });
  it('tests nameChange action correct name', () => {
    const value = 'name';
    const name = {
      error: '',
      value,
      valid: true,
      touched: true
    };
    const expectedAction = {
      type: constants.NAME_CHANGE,
      name
    };
    expect(actions.nameChange(value)).to.eql(expectedAction);
  });

  it('tests phoneChange action with incorrect phone number', () => {
    const value = '123';
    const phone = {
      error: 'Telefoninumber pole korrektne',
      value,
      valid: false,
      touched: true
    };
    const expectedAction = {
      type: constants.PHONE_CHANGE,
      phone
    };
    expect(actions.phoneChange(value)).to.eql(expectedAction);
  });
  it('tests phoneChange action with correct phone number', () => {
    const value = '123456';
    const phone = {
      error: '',
      value,
      valid: true,
      touched: true
    };
    const expectedAction = {
      type: constants.PHONE_CHANGE,
      phone
    };
    expect(actions.phoneChange(value)).to.eql(expectedAction);
  });
});
