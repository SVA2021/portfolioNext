export const content = {
  en: {
    me: ['Sofronov, Vitaliy, Alexandrovich'],
    cv: {href: process.env.hrefEngCV, title: 'cv'},
    lang: 'ru',
  },
  ru: {
    menu: [
      {href: '/', title: 'домой', },
      {href: '/projects', title: 'Проекты', },
      {href: '/about', title: 'Обо мне', },
      {href: '/contacts', title: 'Контакты', },
    ],
    cv: {href: process.env.hrefRuCV, title: 'резюме'},
    lang: 'eng',
  },
}

//todo move all to locales