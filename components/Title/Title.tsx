import React, {FC} from 'react';
import s from './Title.module.scss'

export type TitleProps = {
    text: string
    type: 'h2' | 'h3' | 'h4'
}

export const Title: FC<TitleProps> = ({text, type}) => {
    return (
        <>
            {type === 'h2' && <h2 className={s.section__header}>{text}</h2>}
            {type === 'h3' && <h3 className={s.header__title}>{text}</h3>}
            {type === 'h4' && <h4 className={s.header__subtitle}>{text}</h4>}
        </>
    );
};