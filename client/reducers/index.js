import { combineReducers } from 'redux';
import { apiReducer } from './api';
import { formReducer } from './form';
import { l10nReducer } from './l10n';

const reducers = combineReducers({
  l10nReducer,
  apiReducer,
  formReducer
});

export default reducers;
