import React, {FC} from 'react';
import {Title} from "@/components";
import {useTranslation} from "next-i18next";
import {futureProjectT} from "@/@types/projects";
import {useLang} from "@/hooks/useLang";
import s from './FutureProjectCard.module.scss';

export type FutureProjectCardPropsT = {
    project: futureProjectT
}

export const FutureProjectCard: FC<FutureProjectCardPropsT> = ({project}) => {
    const {t} = useTranslation('projects');
    const lang = useLang();

    return (
        <div className={s.project}>
            <Title text={project.name} type={"h4"}/>
            <div className={s.project__description}>
                <p><span className={s.project__name}>{project.name}</span>{project.description[lang]}</p>
                <p><span className={s.project__special}>{t('why')}</span> {project.why[lang]} </p>
                <p><span className={s.project__special}>{t('technologies')}</span>{project.technologies}</p>
                <p><span className={s.project__special}>{t('newSkills')}</span>{project.newSkills}</p>
            </div>
        </div>
    );
};