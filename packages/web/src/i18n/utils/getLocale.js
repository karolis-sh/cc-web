import {
  DEFAULT_LOCALE,
  AVAILABLE_LOCALES,
  LOCAL_STORAGE_KEY,
} from '../constants';

const getLocale = () => {
  let locale = navigator.language.substr(0, 2);
  const storageLocale = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (AVAILABLE_LOCALES.indexOf(storageLocale) >= 0) locale = storageLocale;
  return AVAILABLE_LOCALES.indexOf(locale) === -1 ? DEFAULT_LOCALE : locale;
};

export default getLocale;
