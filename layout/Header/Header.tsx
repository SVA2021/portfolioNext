import {Logo, NavMenu} from '@/components';
import {FC} from "react";
import s from './Header.module.scss';

export const Header: FC = () => {
    return (
        <header className={s.header}>
            <Logo/>
            <NavMenu/>
        </header>
    )
};