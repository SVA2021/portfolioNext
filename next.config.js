/** @type {import('next').NextConfig} */
const {i18n} = require('./next-i18next.config');

const nextConfig = {
    reactStrictMode: true,
    i18n,
//todo find another place to keep data
    env: {
        href_cv_eng: './Sofronov_Vitaliy_FrontEnd_Developer_170123.pdf',
        href_cv_ru: './FrontEnd_Developer_170123.pdf',
        href_discord: 'https://discordapp.com/users/842765911681400894',
        href_github: 'https://github.com/SVA2021',
        href_telegram: 'https://t.me/SVA_1985',
        href_hh: 'https://hh.ru/applicant/resumes/view?resume=e30eb6d2ff0983faee0039ed1f62784758716e',
    },
}
module.exports = nextConfig;