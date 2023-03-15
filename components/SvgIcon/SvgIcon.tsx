import {FC} from 'react';
import s from './SvgIcon.module.scss';

export type SvgIconSrc = 'social' | 'webskills';

interface SvgIconProps {
  src: SvgIconSrc
  alt?: string
}

export const SvgIcon: FC<SvgIconProps> = ({src, alt}) => {
  const href = alt ? `/${src}#${alt}` : `/${src}`;
  return (
    <svg className={s.icon__svg} role="img" aria-label={alt}>
      <use href={href} />
    </svg>
  )
};