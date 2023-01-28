import Head from "next/head";
import {FC, ReactNode, useState} from "react";
import {Footer, Header} from "../index";

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
      </Head>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  )
};