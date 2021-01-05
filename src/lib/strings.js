const DEFAULT_LANG = 'en'

export const strings = {
  en: {
    APP_TITLE: 'HTTP Cats',
    USAGE_TITLE: 'Usage',
    USAGE_PARAM: 'status_code',
    USAGE_NOTE_LABEL: 'Note',
    USAGE_NOTE_TEXT: 'If you need an extension at the end of the URL just add',
    LANGUAGE_LINK_TEXT: 'Versió Català',
    DEVELOPED_BY: 'Developed by',
    IMAGES_BY: 'Images by',
  },

  cat: {
    APP_TITLE: 'HTTP Gats',
    USAGE_TITLE: 'Instruccions',
    USAGE_PARAM: 'codi_d_estat',
    USAGE_NOTE_LABEL: 'Nota',
    USAGE_NOTE_TEXT:
      'Si necessiteu una extensió al final de l’URL només heu d’afegir',
    LANGUAGE_LINK_TEXT: 'Versió Català',
    DEVELOPED_BY: 'Desenvolupat per',
    IMAGES_BY: 'Imatges de',
  },
}

const getString = (label) => {
  const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')
  const isKnownLang = langParam in strings
  const lang = isKnownLang ? langParam : DEFAULT_LANG

  if (isKnownLang && document.documentElement.getAttribute('lang') !== lang) {
    document.documentElement.setAttribute('lang', lang)
  }

  return strings[lang][label]
}

export default getString
