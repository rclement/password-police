import en from './en'
import fr from './fr'

const locales = [
  {
    name: 'English',
    code: 'en',
    iso: 'en-US'
  },
  {
    name: 'Français',
    code: 'fr',
    iso: 'fr-FR'
  }
]

const defaultLocale = locales[0].code

const messages = {
  en: en,
  fr: fr
}

export default {
  locales: locales,
  defaultLocale: defaultLocale,
  messages: messages
}
