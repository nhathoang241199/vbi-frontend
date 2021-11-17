import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.comingSoon}>
      
      <p className={styles.title}>coming soon</p>
      <p className={styles.text}> We're coming soon! We're working hard to give you the best experience!</p>
      <div className={styles.socialLink}>
        <a href="#">
          <img src="/assets/images/social1.png" />
        </a>
        <a href="#">
          <img src="/assets/images/social2.png" />
        </a>
        <a href="#">
          <img src="/assets/images/social3.png" />
        </a>
        <a href="#">
          <img src="/assets/images/social4.png" />
        </a>
        <a href="#">
          <img src="/assets/images/social5.png" />
        </a>
      </div>
    </div>
  )
}
