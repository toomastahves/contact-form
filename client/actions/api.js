import * as actions from '../constants/api';

export const createContactRequest = (data) => {
  return {
    type: actions.CREATE_CONTACT_REQUEST,
    data
  };
};
export const createContactSuccess = (result) => {
  return {
    type: actions.CREATE_CONTACT_SUCCESS,
    result
  };
};
export const createContactFailed = (error) => {
  return {
    type: actions.CREATE_CONTACT_FAILED,
    error
  };
};

export const listContactsRequest = () => {
  return {
    type: actions.LIST_CONTACTS_REQUEST
  };
};
export const listContactsSuccess = (contacts) => {
  return {
    type: actions.LIST_CONTACTS_SUCCESS,
    contacts
  };
};
export const listContactsFailed = (error) => {
  return {
    type: actions.LIST_CONTACTS_FAILED,
    error
  };
};
