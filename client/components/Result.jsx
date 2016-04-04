import React, { PropTypes } from 'react';

export const Result = ({ submitResult }) => {
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>{'Nimi'}</th>
            <th>{'Telefon'}</th>
            <th>{'E-post'}</th>
            <th>{'Tänav, maja, korter'}</th>
            <th>{'Küla/alevik'}</th>
            <th>{'Linn/maakond'}</th>
            <th>{'Sama aadress'}</th>
            <th>{'Tänav, maja, korter'}</th>
            <th>{'Küla/alevik'}</th>
            <th>{'Linn/maakond'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{submitResult.name}</td>
            <td>{submitResult.phone}</td>
            <td>{submitResult.email}</td>
            <td>{submitResult.billing_address_field1}</td>
            <td>{submitResult.billing_address_field2}</td>
            <td>{submitResult.billing_address_field3}</td>
            <td>{submitResult.same_address}</td>
            <td>{submitResult.shipping_address_field1}</td>
            <td>{submitResult.shipping_address_field2}</td>
            <td>{submitResult.shipping_address_field3}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

Result.propTypes = {
  submitResult: PropTypes.object.isRequired
};

export default Result;
