import {HeroLink, HeroWord} from '@/components'
import {Layout} from '@/layout'
import s from '@/styles/Home.module.scss'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import {useTranslation} from "next-i18next";
import {HeroLinks} from "@/db/home";

export default function Home() {

    const {t} = useTranslation('common');
    const fullName = t('fullName', {returnObjects: true});

    return (
        <Layout>
            <section className={s.hero}>
                <h1 className={s.hero__name}>
                    {
                        fullName.map((name: string) =>
                            <HeroWord name={name} key={name}/>
                        )
                    }
                </h1>
                <p className={s.hero__profession}>Front-End Developer</p>
                <ul className={s.hero__social}>
                    {
                        HeroLinks.map((item) =>
                            <li className={s.hero__item} key={item.id}>
                                <HeroLink title={item.id} href={item.href ?? ''}/>
                            </li>
                        )
                    }
                </ul>
            </section>
        </Layout>
    )
};

export const getStaticProps: GetStaticProps<any> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
        ])),
    },
})
