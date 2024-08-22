import styles from './HeroSectionSecondary.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSectionSecondary({ text }:any) {
    return (
      <section className={styles.HeroSection}>
        <Link href='/'>
          <Image
            src='/assets/logo/photo-studiolab-logo.webp' // Chemin de l'image
            width={220} // Largeur de l'image
            height={56} // Hauteur de l'image
            alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
            priority
          />
        </Link>
        <h1 className={styles.Title}>{text}</h1>
      </section>
    )
}