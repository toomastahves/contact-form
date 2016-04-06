import { combineReducers } from 'redux';
import { formReducer } from './form';
import { l10nReducer } from './l10n';

const reducers = combineReducers({
  formReducer,
  l10nReducer
});

export default reducers;
