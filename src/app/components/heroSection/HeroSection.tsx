import style from './HeroSection.module.css'
import Image from 'next/image'

export default function HeroSection() {
    return (
      <section className={style.heroSection}>
        <Image
          src='/assets/logo/photo-studiolab-logo.webp' // Chemin de l'image
          width={400} // Largeur de l'image
          height={0} // Hauteur de l'image
          alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
        />
        <h1 className={style.title}>
          &quot;Votre Portrait, Notre Passion depuis 2005&quot;
        </h1>
        <div className={style.texteContainer}>
          <p className={style.texte}>
            Depuis 2005, Photo StudioLab excelle en portrait et photographie
            administrative, avec également un service de retouche de haute
            qualité.
          </p>
          <p className={style.texte}>
            Notre studio offre professionnalisme et accessibilité, avec des prix
            compétitifs, un accueil chaleureux et un service sur mesure.
          </p>
          <p className={style.texte}>
            Photo StudioLab, c’est le charme du studio de quartier et une
            relation de confiance avec nos clients.
          </p>
        </div>
        <div className={style.google}>
          <div className={style.googleNote}>
            <Image
              src='/assets/logo/google-logo.webp' // Chemin de l'image
              width={26} // Largeur de l'image
              height={26} // Hauteur de l'image
              alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
            />
            <h2 className={style.googleNoteNumber}>4,8</h2>
          </div>
          <div>
            <Image
              src='/assets/logo/google-stars.webp' // Chemin de l'image
              width={96} // Largeur de l'image
              height={26} // Hauteur de l'image
              alt='Logo du studio Photo StudioLab' // Texte alternatif pour l'image
            />
          </div>
        </div>
      </section>
    )
}