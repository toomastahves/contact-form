import React from 'react';
import ContentLayout from '../Layouts/Content';
import FormContainer from '../../containers/FormContainer';

export const FormPage = () => {
  return (
    <div>
      <FormContainer />
    </div>
  );
};

export default ContentLayout(FormPage);
