import { LANGUAGE_CHANGE } from '../constants/l10n';

const initialState = {
  l10n: {},
  language: ''
};

export const l10nReducer = (state = initialState, action) => {
  switch(action.type) {
    case LANGUAGE_CHANGE:
      return Object.assign({}, state, { ...action } );
    default:
      return state;
  }
};
