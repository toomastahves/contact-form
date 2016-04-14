import { SERVER_URI } from '../constants/api';

export const convertFormToJSON = (form) => {
  const formData = new FormData(form);
  const obj = {};
  for(const key of formData.keys()) {
    obj[key] = formData.get(key);
  }
  return JSON.stringify(obj);
};

export const mapIfSameAddress = (data) => {
  const json = JSON.parse(data);
  if(json.same_address === 'true') {
    return JSON.stringify(Object.assign({}, json, {
      shipping_address_field1: json.billing_address_field1,
      shipping_address_field2: json.billing_address_field2,
      shipping_address_field3: json.billing_address_field3
    }));
  }
  return JSON.stringify(json);
};

// http://www.html5rocks.com/en/tutorials/es6/promises/
export const fetch = ({ path, type, data }) => {
  console.log(`${SERVER_URI}${path}`);
  return new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(type, `${SERVER_URI}${path}`);
    req.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    req.onload = function() {
      if(req.status === 200 || req.status === 201) {
        resolve(JSON.parse(req.response));
      } else {
        reject(Error(req.statusText));
      }
    };
    req.onerror = function() {
      reject(Error('Network error'));
    };
    req.send(data);
  });
};
