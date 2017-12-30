import en from 'react-intl/locale-data/en';
import sv from 'react-intl/locale-data/sv';

const DEFAULT_LOCALE = 'en';
const AVAILABLE_LOCALES = ['en', 'sv'];
const LOCALE_DATA = [...en, ...sv];
const LOCAL_STORAGE_KEY = 'cc:locale=';

export { DEFAULT_LOCALE, AVAILABLE_LOCALES, LOCALE_DATA, LOCAL_STORAGE_KEY };
