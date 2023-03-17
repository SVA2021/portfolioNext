import s from '@/styles/Home.module.scss';
import {FC} from 'react';
import {SvgIcon} from "@/components";

export interface HeroLinkProps {
    src: string
    id: string
    href: string
}

export const HeroLink: FC<HeroLinkProps> = ({src, id, href}) => {
    return (
        <a target="_blank" rel="noreferrer noopener"
           className={s.hero__link}
           href={href}
        >
            <SvgIcon src={src} id={id}/>
            <span className={s.hero__caption}>{id}</span>
        </a>
    );
};
