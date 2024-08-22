import style from './ServiceSectionCard.module.css'
import Image from 'next/image'

export default function ServiceSectionCard({ src, alt, title, price }: any) {
  return (
    <div className={style.ServiceSectionCard}>
      <Image
        src={src} // Chemin de l'image
        width={230} // Largeur de l'image
        height={0} // Hauteur de l'image
        alt={alt} // Texte alternatif pour l'image
        className={style.Image}
      />
      <div className={style.TexteContainer}>
        <h3 className={style.Title}>{title}</h3>
        <p className={style.Price}>{price}</p>
      </div>
    </div>
  )
}
