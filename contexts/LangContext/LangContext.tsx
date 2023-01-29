import React, {useState, FC, ReactNode} from 'react';

type Tlang = {
  lang: 'en' | 'ru',
  toggleLang: () => void
};

type withChildren = {
  children: ReactNode | ReactNode[] | undefined | null
}

const defaultLangValue: Tlang = {
  lang: 'en',
  toggleLang: () => console.log('language changed'),
}

export const LangContext = React.createContext<Tlang>(defaultLangValue);

export const LangProvider: FC<withChildren> = ({children}) => {

  const [lang, setLang] = useState<'en' | 'ru'>('en');

  const toggleLang = () => {
    lang === 'en'
      ? setLang(() => 'ru')
      : setLang(() => 'en')
  };

  return (
    <LangContext.Provider value={{lang, toggleLang}}>
      {children}
    </LangContext.Provider>
  );
};