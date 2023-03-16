import 'react-i18next';
import { Resources as MyResources } from './i18n__types'

declare module 'react-i18next' {
    interface Resources extends MyResources {}
}