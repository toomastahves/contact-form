import { LANGUAGE_CHANGE } from '../constants/l10n';
import est from '../l10n/est';
import eng from '../l10n/eng';

export const changeLanguage = (language) => {
  let l10n = {};
  if(language === 'EST')
    l10n = est;
  if(language === 'ENG')
    l10n = eng;

  return {
    type: LANGUAGE_CHANGE,
    language,
    l10n
  };
};
