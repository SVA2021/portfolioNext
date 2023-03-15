import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import {Layout} from '@/layout'

const inter = Inter({subsets: ['latin']})

export default function About() {
  return (
    <Layout>
      some test text About page
    </Layout>
  )
};
