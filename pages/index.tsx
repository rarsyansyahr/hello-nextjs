import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Counter from '../components/Counter'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello Next</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a target="_blank" href="">DAcademy</a>
        </h1>

        <Counter />
        
      </main>
    </div>
  )
}

export default Home
