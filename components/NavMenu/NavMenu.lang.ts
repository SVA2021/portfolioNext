export const content = {
  en: {
    menu: [
      {href: '/', title: 'home', },
      {href: '/projects', title: 'projects', },
      {href: '/about', title: 'about me', },
      {href: '/contacts', title: 'contacts', },
    ],
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