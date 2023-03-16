import React, {FC} from 'react';
import s from './Logo.module.scss';

interface ILogo {
  name: string
}

export const Logo: FC<ILogo> = ({name}) => {
//todo add i18n

  const logoName: string[] = name.split('');

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