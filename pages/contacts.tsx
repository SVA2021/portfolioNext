import {Layout} from '@/layout'
import {ContactForm, SvgIcon, Title} from "@/components";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import s from '@/styles/Contacts.module.scss';
import {CONTACTS_LINKS, svgIconSrc} from "@/db/contacts";

export default function Contacts() {

    const {t} = useTranslation(['contacts', 'contactForm']);

    return (
        <Layout>
            <section className="contacts">
                <Title text={t('title', {ns: 'contacts'})} type={"h2"}/>
                <div className={s.contacts__inner}>
                    <div className={s.contacts__form}>
                        <ContactForm/>
                    </div>
                    <div className={s.contacts__links}>
                        <ul className={s.social__body}>
                            {
                                CONTACTS_LINKS.map((item) =>
                                    <li key={item.type} className={s.social__item}>
                                        <a className={s.social__link} target={"_blank"} rel={"noreferrer"}>
                                            <SvgIcon src={svgIconSrc} id={item.type} small/>
                                            <p className={s.social__title}>{item.type}</p>
                                            <p className={s.social__data}>{item.data}</p>
                                        </a>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
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
            'contacts',
            'contactForm'
        ])),
    },
})
