/**
 * If you want to enable locale keys typechecking and enhance IDE experience.
 *
 * Requires `resolveJsonModule:true` in your tsconfig.json.
 *
 * @link https://www.i18next.com/overview/typescript
 */
import 'i18next'

import type common from '../public/locales/en/common.json'
import type about from '../public/locales/en/about.json'
import type certificates from '../public/locales/en/certificates.json'

interface I18nNamespaces {
    common: typeof common
    about: typeof about
    certificates: typeof certificates
}

declare module 'i18next' {
    interface CustomTypeOptions {
        defaultNS: 'common'
        resources: I18nNamespaces
    }
}