import { LANGUAGE_CHANGE } from '../constants/l10n';

const initialState = {
  l10n: {},
  language: 'EST'
};

export const l10nReducer = (state = initialState, action) => {
  switch(action.type) {
    case LANGUAGE_CHANGE:
      return Object.assign({}, state, { language: action.language, l10n: action.l10n });
    default:
      return state;
  }
};
