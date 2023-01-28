import {FC, useState} from "react";
import s from './Header.module.scss';
import cn from 'classnames';
import Image from 'next/image';
import Telegram from '@/public/telegram.svg';
import {SvgIcon} from "../SvgIcon/SvgIcon";
import SVG from 'react-inlinesvg';

export const Header: FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={s.header}>
      <div className={cn(s.header__inner)}>
        <div className={s.logo}>
          <span className={s.logo__item}>S</span>
          <span className={s.logo__item}>V</span>
          <span className={s.logo__item}>A</span>

          {/* <SVG
            src="/social.svg#telegram"
            className={s.icon__svg}
            // width={128}
            // height="auto"
            title="telega"
          /> */}
          {/* <img src="/telegram.svg" alt="telega"className={s.icon__svg} /> */}
          {/* <img
            src="/telegram.svg"
            alt="telegram"
            className={s.icon__svg}
            width={24}
            height={24}
            // priority
          /> */}
          {/* <Telegram className={s.icon__svg} /> */}
          <SvgIcon src="telegram" alt="teleg" />
        </div>
        {isOpen &&
          <nav className={s.menu}>
            <ul className={s.menu__body}>
              <li className={s.menu__item}><a href="#" className={s.menu__link}>Home</a></li>
              <li className={s.menu__item}><a href="#projects" className={s.menu__link}>Projects</a></li>
              <li className={s.menu__item}><a href="#about" className={s.menu__link}>About Me</a></li>
              <li className={s.menu__item}><a href="#contacts" className={s.menu__link}>Contacts</a></li>
              <li className={s.menu__item}><a href="./index_ru.html" className={s.menu__link}>Ru</a></li>
              <li className={cn(s.menu__item, s.cv)}><a href="./Sofronov_Vitaliy_FrontEnd_Developer_170123.pdf" className={s.menu__link} download>my CV</a></li>
            </ul>
          </nav>}
        <div className={s.menu__btn} role="button" aria-expanded="false" aria-label="expand navigation menu" onClick={() => setIsOpen(!isOpen)} >
          <svg aria-hidden="true" className={s.menu__btn__svg} viewBox="0 0 448 512">
            <path
              d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z" />
          </svg>
        </div>
      </div>
    </header>
  )
};