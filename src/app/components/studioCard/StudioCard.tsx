import Image from "next/image"
import styles from './StudioCard.module.css'
import Link from "next/link"
import ImageGallery from "../imageGallery/ImageGallery"

export default function StudioCard({ cover, title, price, description, spec }:any) {
    return (
      <div className={styles.card}>
        <Image
          src={cover}
          width={500}
          height={334}
          alt='Logo du studio Photo StudioLab'
          className={styles.img}
        />
        <div className={styles.infoContainer}>
          <div>
            <h2 className={styles.infoTitle}>{title}</h2>
            <h3 className={styles.infoSubtitle}>{price}</h3>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div className={styles.infoSide}>
            <div className={styles.specContainer}>
              <p className={styles.infoSideTitle}>Spécificités :</p>
              <ul className={styles.list}>{spec}</ul>
            </div>
            <div className={styles.buttonContainer}>
              <button className='Button'>
                <Link href='/'>Galerie</Link>
              </button>
              <ImageGallery />
              <button className='Button'>
                
                <Link href='/'>Informations supplémentaires</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}