import {FC} from 'react';
import s from './SvgIcon.module.scss';
import cn from "classnames";

interface SvgIconProps {
    src: string
    id: string
    small?: boolean
}

export const SvgIcon: FC<SvgIconProps> = ({src, id, small}) => {
    return (
        <svg className={cn(s.icon__svg, small && s.icon__small)} role="img" aria-label={id}>
            <use href={`${src}#${id}`}/>
        </svg>
    )
};