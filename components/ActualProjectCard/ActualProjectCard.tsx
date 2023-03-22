import React, {FC} from 'react';
import {actualProjectT} from "@/@types/projects";
import {useTranslation} from "next-i18next";
import {useLang} from "@/hooks/useLang";
import {Gallery, SvgIcon, Title} from "@/components";
import s from './ActualProjectCard.module.scss';

export type ActualProjectCardPropsT = {
    project: actualProjectT
}

export const ActualProjectCard: FC<ActualProjectCardPropsT> = ({project}) => {
    const {t} = useTranslation('projects');
    const lang = useLang();
    const svgIconSrc = '/skills.svg';

    return (
        <div className={s.project}>
            <Title text={project.name} type={"h4"}/>
            <div className={s.project__gallery}>
                <Gallery imgList={project.gallery}/>
            </div>
            <div className={s.project__technologies}>
                {
                    project.skills.map((skill) =>
                        <SvgIcon key={skill} src={svgIconSrc} id={skill}/>
                    )
                }
            </div>
            <div className={s.project__description}>
                <p><span className={s.project__name}>{project.name}</span>{project.description[lang]}</p>
                <p><span className={s.project__special}>{t('why')}</span> {project.why[lang]} </p>
                <p><span className={s.project__special}>{t('technologies')}</span>{project.technologies}</p>
                <p><span className={s.project__special}>{t('additional')}</span>{project.additional[lang]}</p>
            </div>
            <div className={s.project__links}>
                {
                    project.links.map((item) =>
                        <a key={item.href} className={s.project__link} target={"_blank"} rel={'noreferrer'}
                           href={item.href}
                        >
                            {item.title[lang]}
                        </a>
                    )
                }
            </div>
        </div>
    );
};