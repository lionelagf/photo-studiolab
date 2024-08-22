import styles from './IdCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function IdCard({ src, title, price, spec }: any) {
  return (
    <div className={styles.card}>
      <Image
        src={src} // Chemin de l'image
        width={350} // Largeur de l'image
        height={223} // Hauteur de l'image
        alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
        className={styles.img}
      />
      <div className={styles.infoContainer}>
        <div>
          <h2 className={styles.infoTitle}>{title}</h2>
          <h3 className={styles.infoSubtitle}>{price}</h3>
        </div>
        <div className={styles.infoSide}>
          <div>
            <p className={styles.infoSideTitle}>Spécificités :</p>
            <ul className={styles.list}>{spec}</ul>
          </div>
          <div>
            <p className={styles.infoSideTitle}>Infos :</p>
            <ul className={styles.list}>
              <li>Sans rendez-vous</li>
              <li>Retrait immédiat</li>
              <li>Disponible à domicile</li>
            </ul>
          </div>
        </div>
        <button className='Button'>
          <Link href='/'>Informations supplémentaires</Link>
        </button>
      </div>
    </div>
  )
}
