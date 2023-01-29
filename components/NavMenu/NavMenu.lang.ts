export const content = {
  en: {
    menu: [
      {href: '/', title: 'home', },
      {href: '/projects', title: 'projects', },
      {href: '/about', title: 'about me', },
      {href: '/contacts', title: 'contacts', },
    ],
    cv: {href: process.env.href_cv_eng, title: 'cv'},
    lang: 'ru',
  },
  ru: {
    menu: [
      {href: '/', title: 'домой', },
      {href: '/projects', title: 'Проекты', },
      {href: '/about', title: 'Обо мне', },
      {href: '/contacts', title: 'Контакты', },
    ],
    cv: {href: process.env.href_cv_ru, title: 'резюме'},
    lang: 'eng',
  },
}