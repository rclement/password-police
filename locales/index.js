import common from './common'
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
  en: {
    common: common,
    ...en
  },
  fr: {
    common: common,
    ...fr
  }
}

export default {
  locales: locales,
  defaultLocale: defaultLocale,
  messages: messages
}
