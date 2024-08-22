import style from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className={style.Container}>
      <Image
        src={'/assets/logo/photo-studiolab-logo.webp'} // Chemin de l'image
        width={150}
        height={38}
        alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
        priority
      />
      <div className={style.TextContainer}>
        <div className={style.TextSubContainer}>
          <p className={`${style.Text} ${style.Bold}`}>Téléphone :</p>
          <p className={style.Text}>01.45.80.29.84</p>
        </div>
        <div className={style.TextSubContainer}>
          <p className={`${style.Text} ${style.Bold}`}>Mail :</p>
          <p className={style.Text}>contact@photo-studiolab.fr</p>
        </div>
        <div className={style.TextSubContainer}>
          <p className={`${style.Text} ${style.Bold}`}>Adresse :</p>
          <p className={style.Text}>89, rue de la Glacière - 75013 Paris</p>
        </div>
      </div>
      <div className={style.TextSubContainer}>
        <p className={`${style.Text} ${style.Bold}`}>©2024 Photo StudioLab</p>
        <Link href='/mentions-legales'>
          <p className={`${style.Text} ${style.Bold}`}>Mentions légales</p>
        </Link>
      </div>
    </footer>
  )
}
