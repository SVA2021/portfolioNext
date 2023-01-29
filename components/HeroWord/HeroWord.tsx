import React, {FC} from 'react';
import s from './HeroWord.module.scss'

interface IHeroWord {
  name: string | undefined | null
}

export const HeroWord: FC<IHeroWord> = ({name}) => {

  const firstLetter = name?.slice(0, 1) ?? '';
  const restLetters = name?.slice(1) ?? '';

  return (
    <span className={s.hero__word}>
      <span className={s.hero__letter}>
        {firstLetter}
      </span>
      {restLetters}
    </span>
  );
};