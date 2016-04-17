import React from 'react';

export const Info = () => {
  return (
    <div className='content'>
      <h2>{'Setup and Configuration'}</h2>
      <div>
        <div>{'npm install'}</div>
        <div>{'npm start'}</div>
        <div>{'http://localhost:1337/'}</div>
      </div>
      <div>
        <h2>{'Functionality'}</h2>
        <div>{'Validates form on change.'}</div>
        <div>{'Sends form values to Node/Koa server, saves to Mongo database.'}</div>
        <div>{'Echoes inserted values back.'}</div>
        <div>{'Lists all contacts from database.'}</div>
        <div>{'Allows updating values.'}</div>
        <div>{'Allows changing language.'}</div>
      </div>
      <div>
        <h2>{'Issues'}</h2>
        <div>{'Changing language fast causes error. Better to refactor whole component and load language pack from database.'}</div>
        <div>{'Changing update form to create form fast will populate create form with update form values, because they use same model. Need to separate models or cancel update request.'}</div>
      </div>
      <div>
        <h2>{'Todos'}</h2>
        <div>{'Write more unit tests.'}</div>
        <div>{'Save form values automatically on change.'}</div>
      </div>
    </div>
  );
};

export default Info;
