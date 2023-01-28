import React, {FC, ReactComponentElement, ReactElement} from 'react';
import Social from '@/public/social.svg'
import s from './SvgIcon.module.scss'

interface SvgIconProps {
  src: string
  alt?: string
}

export const SvgIcon: FC<SvgIconProps> = ({src, alt}) => {
  return (
    <svg className={s.icon__svg} >
      <use href={`${Social}#${src}`} />
    </svg>
  )
};