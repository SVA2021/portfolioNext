import {Layout} from '@/layout'
import {SvgIcon, Title} from "@/components";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import s from '@/styles/About.module.scss';
import {certificateImgSrc, myGithub, mySkills, svgIconSrc} from "@/db/about";
import Link from "next/link";
import Image from "next/image";

export default function About() {

    const {t} = useTranslation('about');

    return (
        <Layout>
            <section className={s.about}>
                <Title text={t('title')} type={"h2"}/>
                <div className={s.about__inner}>
                    <div className={s.about__bio}>
                        <Title text={t('bio')} type={'h3'}/>
                        <p>{t('bioFull')}</p>
                    </div>
                    <div className={s.about__skills}>
                        <Title text={t('skill')} type={'h4'}/>
                        <div className={s.skills__set}>
                            {mySkills.map((skill) =>
                                <SvgIcon key={skill} src={svgIconSrc} id={skill}/>
                            )}
                        </div>
                    </div>
                </div>
                <div className={s.about__stats}>
                    <Title text={t('gh')} type={"h4"}/>
                    <div className={s.about__stats__wrapper}>
                        <a target="_blank" href={myGithub} className={s.about__link} rel="noreferrer">
                            <img className={s.about__img} src={t('statsSrc')} alt={t('statsAlt')}/>
                        </a>
                        <a target="_blank" href={myGithub} className={s.about__link} rel="noreferrer">
                            <img className={s.about__img} src={t('mostSrc')} alt={t('mostAlt')}/>
                        </a>
                    </div>
                </div>
                <div className={s.about__stats}>
                    <Title text={t('certificate')} type={"h4"}/>
                    <Link href={'/certificates'} className={s.about__link}>
                        <Image className={s.about__img}
                               src={certificateImgSrc}
                               alt={t('certificateImgAlt')}
                               width="1800"
                               height="500"
                        />
                        <span className={s.about__tip}>{t('certificateTip')}</span>
                    </Link>
                </div>
            </section>
        </Layout>
    )
};

type Props = {};
export const getStaticProps: GetStaticProps<Props> = async ({locale}) => ({
    props: {
        ...(await serverSideTranslations(locale ?? 'en', [
            'common',
            'about',
        ])),
    },
})
