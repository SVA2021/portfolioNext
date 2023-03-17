import {Layout} from '@/layout'
import {Title} from "@/components";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import s from '@/styles/Certificates.module.scss';
import Image from "next/image";
import {gb, learnJS, sl, w3s} from "@/db/certificates";

export default function Certificates() {

    const {t} = useTranslation('certificates');

    return (
        <Layout>
            <Title text={t('title')} type={"h2"}/>
            <section className={s.geekbrains}>
                <Title text={'geekbrains.ru'} type={'h4'}/>
                <ul className={s.gallery}>
                    {gb.map((item) =>
                        <li key={item.href} className={s.gallery__item}>
                            <a className={s.gallery__link} target={"_blank"} rel={'noreferrer'} href={item.href}>
                                <p className={s.gallery__caption}>{item.caption}</p>
                                <Image className={s.gallery__img}
                                       src={item.imgSrc}
                                       alt={item.imgAlt}
                                       width="300"
                                       height="220"
                                />
                                <p className={s.gallery__tooltip}>{t('gbTip')}</p>
                            </a>
                        </li>
                    )}
                </ul>
            </section>
            <section className={s.sololearn}>
                <Title text={'sololearn.com'} type={'h4'}/>
                <ul className={s.gallery}>
                    {sl.map((item) =>
                        <li key={item.href} className={s.gallery__item}>
                            <a className={s.gallery__link} target={"_blank"} rel={'noreferrer'} href={item.href}>
                                <p className={s.gallery__caption}>{item.caption}</p>
                                <Image className={s.gallery__img}
                                       src={item.imgSrc}
                                       alt={item.imgAlt}
                                       width="815"
                                       height="575"
                                />
                                <p className={s.gallery__tooltip}>{t('slTip')}</p>
                            </a>
                        </li>
                    )}
                </ul>
            </section>
            <section className={s.other}>
                <Title text={t('other')} type={'h3'}/>
                <Title text={'w3schools.com'} type={'h4'}/>
                <ul className={s.gallery}>
                    {w3s.map((item) =>
                        <li key={item.imgSrc} className={s.gallery__item}>
                            <p className={s.gallery__caption}>{item.caption}</p>
                            <Image className={s.gallery__img}
                                   src={item.imgSrc}
                                   alt={item.imgAlt}
                                   width="1748"
                                   height="617"
                            />
                        </li>
                    )}
                </ul>
                <Title text={'learn.javascript.ru'} type={'h4'}/>
                <ul className={s.gallery}>
                    {learnJS.map((item) =>
                        <li key={item.caption} className={s.gallery__item}>
                            <p className={s.gallery__caption}>{item.caption}</p>
                            <Image className={s.gallery__img}
                                   src={item.imgSrc}
                                   alt={item.imgAlt}
                                   width="1741"
                                   height="513"
                            />
                        </li>
                    )}
                </ul>
            </section>

        </Layout>
    )
};

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
            'certificates',
        ])),
    },
})
