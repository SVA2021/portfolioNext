import {HeroLink, HeroWord,} from '@/components'
import {Layout} from '@/layout'
import s from '@/styles/Home.module.scss'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import {useTranslation} from "next-i18next";

export default function Login() {

    const {t} = useTranslation('common');

    return (
        <Layout>
            <section className={s.login}>
                login page in development stage
            </section>
        </Layout>
    )
};
type Props = {}
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
        ])),
    },
})
