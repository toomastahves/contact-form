import React, { PropTypes } from 'react';
import Spinner from './Spinner';

export const ContactView = ({ submitResult, handleUpdate, fetching, l10n }) => {
  return (
    <div>
      {fetching ?
        <div className='spinner-location'>
          <Spinner />
        </div> :
        <div className='view-object'>
          <div className='view-set'>
            <div className='view-item'>{l10n.NAME}</div>
            <div className='view-item'>{submitResult.name}</div>
          </div>
          <div className='view-set'>
            <div className='view-item'>{l10n.PHONE}</div>
            <div className='view-item'>{submitResult.phone}</div>
          </div>
          <div className='view-set'>
            <div className='view-item'>{l10n.EMAIL}</div>
            <div className='view-item'>{submitResult.email}</div>
          </div>
          <div className='view-set'>
            <div className='view-item'>{l10n.ADDRESS_FIELD1}</div>
            <div className='view-item'>{submitResult.billing_address_field1}</div>
          </div>
          <div className='view-set'>
            <div className='view-item'>{l10n.ADDRESS_FIELD2}</div>
            <div className='view-item'>{submitResult.billing_address_field2}</div>
          </div>
          <div className='view-set'>
            <div className='view-item'>{l10n.ADDRESS_FIELD3}</div>
            <div className='view-item'>{submitResult.billing_address_field3}</div>
          </div>
          <div className='view-set'>
            <div className='view-item'>{l10n.ADDRESS_FIELD1}</div>
            <div className='view-item'>{submitResult.shipping_address_field1}</div>
          </div>
          <div className='view-set'>
            <div className='view-item'>{l10n.ADDRESS_FIELD2}</div>
            <div className='view-item'>{submitResult.shipping_address_field2}</div>
          </div>
          <div className='view-set'>
            <div className='view-item'>{l10n.ADDRESS_FIELD3}</div>
            <div className='view-item'>{submitResult.shipping_address_field3}</div>
          </div>
          <div className='view-set'>
            <button className='view-button formbutton' onClick={handleUpdate} value={submitResult._id}>{'Update'}</button>
          </div>
        </div>
    }
    </div>
  );
};

ContactView.propTypes = {
  submitResult: PropTypes.object.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  l10n: PropTypes.object.isRequired
};

export default ContactView;
