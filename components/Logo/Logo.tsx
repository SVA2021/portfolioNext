import React, {FC} from 'react';
import s from './Logo.module.scss';
import {useTranslation} from "next-i18next";

export const Logo: FC = () => {

    const {t} = useTranslation('common');
    const logoName: string[] = t('logo').split('');

    return (
        <div className={s.logo}>
            {
                logoName.map((letter) =>
                    <span key={letter} className={s.logo__item}>{letter}</span>
                )
            }
        </div>
    );
};