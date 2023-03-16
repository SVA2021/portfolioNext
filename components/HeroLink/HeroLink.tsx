import s from '@/styles/Home.module.scss';
import {FC} from 'react';

export interface HeroLinkProps {
  title: string
  href: string
}

export const HeroLink: FC<HeroLinkProps> = ({title, href}) => {
  const svgHref = `/social.svg#${title}`;
  return (
    <a
      target="_blank" rel="noreferrer noopener"
      className={s.hero__link}
      href={href}
    >
      {/*//todo change to SVG_Icon component*/}
      <svg className={s.icon__svg} role="img" aria-label={title}>
        <use href={svgHref}></use>
      </svg>
      <span className={s.hero__caption}>{title}</span>
    </a>
  );
};
