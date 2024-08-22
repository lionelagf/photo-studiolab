import styles from './ReviewSection.module.css'
import Image from 'next/image'

export default function ReviewSection() {
    return (
      <section className={styles.ReviewSection}>
        <h2 className={styles.ReviewTitle}>Ils nous ont fait confiance :</h2>
        <iframe
          src='https://e1057fbc3e324a3fabded3aeef10fe19.elf.site'
          width='100%'
          height='330px'
        ></iframe>
        <div className={styles.ReviewImgContainer}>
          <Image
            src='/assets/logo/marriott.png' // Chemin de l'image
            width={130} // Largeur de l'image
            height={26} // Hauteur de l'image
            alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
            
          />
          <Image
            src='/assets/logo/federation_des_fromagers_de_france.png' // Chemin de l'image
            width={215} // Largeur de l'image
            height={96} // Hauteur de l'image
            alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
          />
          <Image
            src='/assets/logo/laforet.png' // Chemin de l'image
            width={200} // Largeur de l'image
            height={26} // Hauteur de l'image
            alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
          />
          <Image
            src='/assets/logo/cinemas_gaumont_pathe.png' // Chemin de l'image
            width={220} // Largeur de l'image
            height={50} // Hauteur de l'image
            alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
          />
          <Image
            src='/assets/logo/ramsay_generale_de_santé.png' // Chemin de l'image
            width={120} // Largeur de l'image
            height={26} // Hauteur de l'image
            alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
          />
        </div>
      </section>
    )
}