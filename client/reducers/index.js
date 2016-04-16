import { combineReducers } from 'redux';
import { contactReducer } from './contact';
import { l10nReducer } from './l10n';

const reducers = combineReducers({
  l10nReducer,
  contactReducer
});

export default reducers;
