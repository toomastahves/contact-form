import { LANGUAGE_CHANGE } from '../constants/l10n';
import est from '../l10n/est';
import eng from '../l10n/eng';

export const changeLanguage = (language) => {
  const languages = {};
  languages.EST = est;
  languages.ENG = eng;

  return {
    type: LANGUAGE_CHANGE,
    language,
    l10n: languages[language]
  };
};
