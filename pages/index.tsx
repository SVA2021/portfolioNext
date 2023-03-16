import {HeroLink, HeroWord} from '@/components'
import {LangContext} from '@/contexts'
import {Layout} from '@/layout'
import s from '@/styles/Home.module.scss'
import {useContext} from 'react'

const me = {
  en: {fullName: ['Sofronov', 'Vitaliy', 'Alexandrovich'], },
  ru: {fullName: ['Софронов', 'Виталий', 'Александрович'], },
}
// todo move data to separate files
const HeroLinks = [
  {
    title: 'telegram',
    href: process.env.href_telegram,
  },
  {
    title: 'discord',
    href: process.env.href_discord,
  },
  {
    title: 'github',
    href: process.env.href_github,
  },
  {
    title: 'hh',
    href: process.env.href_hh,
  },
]

export default function Home() {

  const {lang} = useContext(LangContext);
  const fullName = me[lang].fullName;

  return (
    <Layout>
      <section className={s.hero}>
        <h1 className={s.hero__name}>
          {
            fullName.map((name) =>
              <HeroWord name={name} key={name} />
            )
          }
        </h1>
        <p className={s.hero__profession}>Front-End Developer</p>
        <ul className={s.hero__social}>
          {
            HeroLinks.map((item, index) =>
              <li className={s.hero__item} key={index}>
                <HeroLink title={item.title} href={item.href ?? ''} />
              </li>
            )
          }
        </ul>
      </section>
    </Layout>
  )
};
