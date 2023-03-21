// import React, {FC, ReactNode, useEffect, useState} from 'react';
//
// type EnOrRu = 'en' | 'ru';
//
// type Tlang = {
//   lang: EnOrRu,
//   toggleLang: () => void
// };
//
// type withChildren = {
//   children: ReactNode | ReactNode[] | undefined | null
// }
//
// const defaultLangValue: Tlang = {
//   lang: 'en',
//   toggleLang: () => console.log('language changed'),
// }
//
// export const LangContext = React.createContext<Tlang>(defaultLangValue);
//
// export const LangProvider: FC<withChildren> = ({children}) => {
//   const [lang, setLang] = useState<EnOrRu>('en');
//
//   useEffect(() => {
//     const localLang = window.localStorage.getItem('lang') ?? '';
//     if (localLang === 'en' || localLang === 'ru') setLang(localLang);
//   }, [])
//
//   const toggleLang = () => {
//     const newValue: EnOrRu = lang === 'en' ? 'ru' : 'en';
//     setLang(newValue);
//     window.localStorage.setItem('lang', newValue);
//   };
//
//   return (
//     <LangContext.Provider value={{lang, toggleLang}}>
//       {children}
//     </LangContext.Provider>
//   );
// };
export {}