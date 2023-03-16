import {useRouter} from 'next/router';

export type langT = 'en' | 'ru';
export const defaultLang: langT = 'en';

export function useLang(): langT {
    const {locale} = useRouter();
    return (locale as langT) || defaultLang;
}

export function getNextLang(lang: langT): langT {
    return lang === 'en' ? 'ru' : 'en';
}