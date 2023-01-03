import { LOCAL_STORAGE_KEY } from '../constants';

const setLocale = (locale) => localStorage.setItem(LOCAL_STORAGE_KEY, locale);

export default setLocale;
