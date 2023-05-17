import en from './lang/en-US.json';
import id from './lang/id-ID.json';

export default defineI18nConfig((nuxt) => ({
  locale: 'id', // set locale
  // fallbackLocale: ['en', 'id'],
  messages: {
    en: en,
    id: id,
  },
}));
