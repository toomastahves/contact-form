import * as actions from '../constants/contact';
import { mapFormMetaDataToObject } from '../services/helpers';

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

export const getContactRequest = (_id) => {
  return {
    type: actions.GET_CONTACT_REQUEST,
    _id
  };
};
export const getContactSuccess = (contact) => {
  const mapped = mapFormMetaDataToObject(contact);
  return {
    type: actions.GET_CONTACT_SUCCESS,
    contact: mapped
  };
};
export const getContactFailed = (error) => {
  return {
    type: actions.GET_CONTACT_FAILED,
    error
  };
};
