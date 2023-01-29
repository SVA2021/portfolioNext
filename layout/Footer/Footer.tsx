import {FC} from 'react';
import s from './Footer.module.scss';

export const Footer: FC = () => {
  const year = (new Date()).getFullYear();
  return (
    <footer className={s.footer}>
      {year}
      <sup className={s.special__mark}>©</sup>
    </footer>
  )
};