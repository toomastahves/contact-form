import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { validateForm } from '../actions/form';

export const Form = (props) => {
  return (
    <div className='flex'>

      <form>
        <div className='title justify start-right'>{'Kontaktandmed'}</div>
        <div className='justify'>
          <label className='form-label' htmlFor='name'>{'Ees- ja perenimi'}</label>
          <input className='form-input' type='text' name='name' id='name' />
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='telephone'>{'Telefon'}</label>
          <input className='form-input' type='text' name='telephone' id='telephone' />
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='email'>{'E-post'}</label>
          <input className='form-input' type='text' name='email' id='email' />
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field1'>{'Tänav, maja, korter'}</label>
          <input className='form-input' type='text' name='billing_address_field1' id='billing_address_field1' />
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field2'>{'Küla/alevik'}</label>
          <input className='form-input' type='text' name='billing_address_field2' id='billing_address_field2' />
        </div>

        <div className='justify'>
          <input value='true' className='start-right' type='radio' name='same_address' id='same_address_true' defaultChecked />
          <label htmlFor='same_address_true'>{'Kohaletoimetamine samale aadressile'}</label>
        </div>
        <div className='justify'>
          <input value='false' className='start-right' type='radio' name='same_address' id='same_address_false' />
          <label htmlFor='same_address_false'>{'Kohaletoimetamine erinevale aadressile'}</label>
        </div>

        <div className='justify'>
          <label className='form-label' htmlFor='billing_address_field3'>{'Linn/maakond'}</label>
          <select className='form-input' name='billing_address_field3' id='billing_address_field3' >
            <option value='Harjumaa'>{'Harjumaa'}</option>
            <option value='Muu'>{'Muu'}</option>
          </select>
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='shipping_address_field1'>{'Tänav, maja, korter'}</label>
          <input className='form-input' type='text' name='shipping_address_field1' id='shipping_address_field1' />
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='shipping_address_field2'>{'Küla/alevik'}</label>
          <input className='form-input' type='text' name='shipping_address_field2' id='shipping_address_field2' />
        </div>
        <div className='justify'>
          <label className='form-label' htmlFor='shipping_address_field3'>{'Linn/maakond'}</label>
          <select className='form-input' name='shipping_address_field3' id='shipping_address_field3' >
            <option value='Harjumaa'>{'Harjumaa'}</option>
            <option value='Muu'>{'Muu'}</option>
          </select>
        </div>
        <div className='justify'>
          <input className='start-right' id='terms' name='terms' type='checkbox' />
          <label htmlFor='terms'>{'Olen tingimustega tutvunud'}</label>
        </div>
        <div className='justify'>
          <input className='submit-button' type='submit' value='Salvesta' />
        </div>
      </form>
    </div>
  );
};

Form.propTypes = {
  valid: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    valid: state.formReducer.valid
  };
};

const mapDispatchToProps = (dispatch) => {
  dispatch(validateForm());
  return { dispatch };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
