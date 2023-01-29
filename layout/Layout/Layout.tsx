import Head from "next/head";
import {FC, ReactNode} from "react";
import {Footer, Header} from "../index";
import s from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode | ReactNode[]
}

export const Layout: FC<LayoutProps> = ({children}) => {

  return (
    <>
      <Head>
        <title>SVA portfolio</title>
        <meta name="description" content="SVA portfolio made with next framework" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="SVA portfolio page" />
        <link rel="apple-touch-icon" sizes="180x180" href="./apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
        <link rel="manifest" href="./site.webmanifest" />
        <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="apple-mobile-web-app-title" content="SVA" />
        <meta name="application-name" content="SVA" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />
      <main className={s.main}>
        {children}
      </main>
      <Footer />
    </>
  )
};