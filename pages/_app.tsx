import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {appWithTranslation} from 'next-i18next'
import {AuthContextProvider} from "@/contexts/Auth/AuthContext";

const MyApp = ({Component, pageProps}: AppProps) => {
    return (
        <AuthContextProvider>
            <Component {...pageProps} />
        </AuthContextProvider>
    )
}

export default appWithTranslation(MyApp);