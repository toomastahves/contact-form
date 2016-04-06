import React, { PropTypes } from 'react';

export const Result = ({ submitResult, l10n }) => {
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>{l10n.NAME}</th>
            <th>{l10n.PHONE}</th>
            <th>{l10n.EMAIL}</th>
            <th>{l10n.ADDRESS_FIELD1}</th>
            <th>{l10n.ADDRESS_FIELD2}</th>
            <th>{l10n.ADDRESS_FIELD3}</th>
            <th>{l10n.ADDRESS_FIELD1}</th>
            <th>{l10n.ADDRESS_FIELD2}</th>
            <th>{l10n.ADDRESS_FIELD3}</th>
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
  submitResult: PropTypes.object.isRequired,
  l10n: PropTypes.object.isRequired
};

export default Result;
