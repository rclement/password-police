export default {
  home: {
    title: '🔐 Password Police 🚨',
    subtitle: 'Liste des {passwordpolicies} pour les services en ligne',
    contribute:
      'Ajoutez votre site-web préféré à cette base de données en soumettant une pull-request sur {github}',
    passwordPolicies: 'politiques de mot de passe'
  },

  categories: {
    title: 'Catégories',
    banking: 'Banque',
    design: 'Design',
    government: 'Gouvernement',
    technology: 'Technologie',
    web: 'Web'
  },

  search: {
    placeholder: 'ex: Google'
  },

  table: {
    empty: 'Aucun résultat'
  },

  policies: {
    website: 'Site-web',
    minlength: 'Longueur minimum',
    maxlength: 'Longueur maximum',
    uppercase: 'Majuscules [A-Z]',
    lowercase: 'Minuscules [a-z]',
    numbers: 'Chiffres [0-9]',
    symbols: 'Symboles [!@#$%^&*]',
    score: 'Score [0-4]'
  },

  credits: {
    made: 'Fait-main par {author} et les {contributors}',
    powered: 'Propulsé par {nuxt}, stylisé avec {bulma}',
    licensed: 'Logiciel libre sous {license}',
    license: 'licence MIT',
    contributors: 'contributeurs',
    copyright: {
      text: 'Tous droits réservés',
      start: '2019',
      end: 'present',
      author: 'Romain Clement'
    },
    cookies: 'Mettre à jour la politique des cookies',
    language: 'Langue'
  },

  cookies: {
    consent: `Nous utilisons des cookies afin d'analyser le trafic et d'améliorer votre expérience utilisateur.`,
    accept: 'Accepter',
    decline: 'Refuser',
    learnMore: '🍪 En savoir plus'
  },

  errors: {
    codes: [
      {
        code: 404,
        title: 'Page introuvable',
        message: 'Il semblerait que vous soyez perdu !'
      }
    ],
    backToHome: `Retour à l'accueil`
  }
}
