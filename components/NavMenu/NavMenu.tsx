import cn from 'classnames';
import Link from 'next/link';
import {FC, useState} from 'react';
import s from './NavMenu.module.scss';
import {useRouter} from 'next/router';
import {getNextLang, useLang} from "@/hooks/useLang";
import {useTranslation} from 'next-i18next';

type MenuItemT = {
    en: string
    ru: string
    href: string
}
const MenuLinks: MenuItemT [] = [
    {href: '/', en: 'home', ru: 'домой',},
    {href: '/projects', en: 'projects', ru: 'Проекты',},
    {href: '/about', en: 'about me', ru: 'Обо мне',},
    {href: '/contacts', en: 'contacts', ru: 'Контакты',},
];

export const NavMenu: FC = () => {

    const router = useRouter();
    const lang = useLang();
    const {t} = useTranslation('common');
    const [isOpen, setIsOpen] = useState(false);
    const toggleLang = () => router.push(router.pathname, router.pathname, {locale: getNextLang(lang)})

    return (
        <>
            <nav className={cn(s.menu, isOpen ? [s.menu__modal] : '')}>
                <ul className={s.menu__body}>
                    {
                        MenuLinks.map((item: MenuItemT) =>
                            <li className={s.menu__item} key={item.en}>
                                <Link href={item.href} className={s.menu__link}>
                                    {item[lang]}
                                </Link>
                            </li>
                        )
                    }
                    <li className={s.menu__item} onClick={() => toggleLang()}>
                        <span className={s.menu__link}>{getNextLang(lang)}</span>
                    </li>
                    <li className={cn(s.menu__item, s.cv)}>
                        <a href={t('cv')} className={s.menu__link} download>cv</a>
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
                        d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/>
                </svg>
            </button>
        </>
    );
};