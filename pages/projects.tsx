import {ActualProjectCard, FutureProjectCard, Title,} from '@/components'
import {Layout} from '@/layout'
import s from '@/styles/Projects.module.scss'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {GetStaticProps} from "next";
import {useTranslation} from "next-i18next";
import {useEffect, useRef, useState} from "react";
import {getActualProjects, getFutureProjects} from "@/fb/firestore";
import {actualProjectT, futureProjectT} from "@/@types/projects";

export default function Projects() {

    const {t} = useTranslation(['projects', 'gallery']);

    const [actualProjects, setActualProjects] = useState<actualProjectT[]>([]);
    const [futureProjects, setFutureProjects] = useState<futureProjectT[]>([]);
    const devRef = useRef(false);

    useEffect(() => {
        if (!devRef.current) {
            getFutureProjects().then((res) => {
                console.log(res)
                setFutureProjects(() => res.sort((a, b) => b.id - a.id));
            })
            getActualProjects().then((res) => {
                console.log(res)
                setActualProjects(() => res.sort((a, b) => b.id - a.id));
            })
            devRef.current = true;
        }
    }, [])

    return (
        <Layout>
            <section className={s.projects}>
                <Title text={t('title', {ns: 'projects'})} type={"h2"}/>
                <Title text={t('actual', {ns: 'projects'})} type={"h3"}/>
                <div className={s.actual}>
                    <div className={s.actual__inner}>
                        {
                            actualProjects.map((item) =>
                                <ActualProjectCard key={item.id} project={item}/>)
                        }
                    </div>
                </div>
                <Title text={t('future', {ns: 'projects'})} type={"h3"}/>
                <div className={s.future}>
                    <div className={s.future__inner}>
                        {
                            futureProjects.map((item) =>
                                <FutureProjectCard key={item.id} project={item}/>)
                        }
                    </div>
                </div>
            </section>
        </Layout>
    )
};
type Props = {}
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
            'projects',
            'gallery',
        ])),
    },
})
