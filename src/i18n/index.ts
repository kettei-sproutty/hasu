import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: 'en',
    supportedLngs: ['en', 'it'],
    ns: 'common',
    backend: {
      loadPath: '/public/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
        wait: false,
        useSuspense: false
    }
  })

export default i18n
