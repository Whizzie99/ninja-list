import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo dolorum molestiae, quas quasi doloribus repudiandae eos nihil sed saepe earum quam quos quia natus, iusto nesciunt error totam fugiat?
        </p>

        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio explicabo dolorum molestiae, quas quasi doloribus repudiandae eos nihil sed saepe earum quam quos quia natus, iusto nesciunt error totam fugiat?
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>
            see Ninja listing
          </a>
        </Link>
      </div>
    </>
  )
}
