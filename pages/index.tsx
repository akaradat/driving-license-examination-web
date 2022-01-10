import Link from 'next/link'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const buttonName = 'start'
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <Link href="/examinations">Driving License Examination</Link>
        </h1>


        <div className={styles.grid}>
          <Link href="/examinations/1">
            <a className={styles.card}>
              <h2>{ buttonName }</h2>
            </a>
          </Link>
        </div>
        <p className={styles.description}>
          press
          <code className={styles.code}>{buttonName}</code>
          to start the examination
        </p>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
