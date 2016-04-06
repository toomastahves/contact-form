import { combineReducers } from 'redux';
import { apiReducer } from './api';
import { formReducer } from './form';
import { l10nReducer } from './l10n';

const reducers = combineReducers({
  apiReducer,
  formReducer,
  l10nReducer
});

export default reducers;
