import {baseLangT} from "@/@types/lang";

export type projectMode = 'future' | 'actual';
export type editMode = 'old' | 'new';

export const WEB_SKILLS_FULL = [
    'html5', 'css3', 'js', 'git', 'markdown', 'cssModules', 'github', 'react', 'redux', 'sass', 'typescript', 'angular',
    'nextjs', 'vue', 'graphql',
] as const;

export  type webSkill = typeof WEB_SKILLS_FULL[number];

export type baseProjectT = {
    id: number
    name: string
    technologies: string
    why: baseLangT
    description: baseLangT
}

export  type futureProjectT = baseProjectT & {
    newSkills: string
}

export  type actualProjectT = baseProjectT & {
    additional: baseLangT
    gallery: string[]
    skills: webSkill[]
    links: linkT[]
}

export type linkT = {
    href: string
    title: baseLangT
}