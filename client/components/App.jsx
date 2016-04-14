import React, { PropTypes } from 'react';
import L10nContainer from '../containers/L10nContainer';

export const App = (props) => {
  return (
    <div>
      <L10nContainer />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
