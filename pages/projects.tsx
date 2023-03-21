import {HeroLink, HeroWord,} from '@/components'
import {Layout} from '@/layout'
import s from '@/styles/Home.module.scss'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import {useTranslation} from "next-i18next";
import {useEffect} from "react";
import {signInAnonymous} from "@/fb/authentication";
import {getActualProjects, getFutureProjects} from "@/fb/firestore";

export default function Projects() {

    const {t} = useTranslation('common');

    useEffect(() => {
        getFutureProjects().then((res) => console.log(res))
        getActualProjects().then((res) => console.log(res))
    }, [])

    return (
        <Layout>
            <section className={s.projects}>
                projects page in development stage
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
