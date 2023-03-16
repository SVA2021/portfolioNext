import {LangContext} from '@/contexts';
import cn from 'classnames';
import Link from 'next/link';
import {FC, useContext, useState} from 'react';
import {content} from './NavMenu.lang';
import s from './NavMenu.module.scss';

export const NavMenu: FC = () => {
//todo add i18n
  const {lang, toggleLang} = useContext(LangContext);
  const [isOpen, setIsOpen] = useState(false);
  const MenuLinks = content[lang].menu;

  interface IMenuItem {
    title: string
    href: string
  }

  const MenuItem: FC<IMenuItem> = ({title, href}) => {
    return (
      <li className={s.menu__item}>
        <Link href={href} className={s.menu__link}>
          {title}
        </Link>
      </li>
    )
  }

  return (
    <>
      <nav className={cn(s.menu, isOpen ? [s.menu__modal] : '')}>
        <ul className={s.menu__body}>
          {
            MenuLinks.map((item, index) =>
              <MenuItem key={index} title={item.title} href={item.href} />
            )
          }
          <li className={s.menu__item} onClick={() => toggleLang()} >
            <span className={s.menu__link}>
              {content[lang].lang}
            </span>
          </li>
          <li className={cn(s.menu__item, s.cv)}>
            <a href={content[lang].cv.href} className={s.menu__link} download>
              {content[lang].cv.title}
            </a>
          </li>
        </ul>
      </nav>
      <button
        className={s.menu__btn}
        aria-expanded="false"
        aria-label="expand navigation menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg aria-hidden="true" className={s.menu__btn__svg} viewBox="0 0 448 512">
          <path
            d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
        </svg>
      </button>
    </>
  );
};