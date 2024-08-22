import style from './ServiceSection.module.css'
import ServiceSectionCard from '../serviceSectionCard/ServiceSectionCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faPerson, faBaby, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function ServiceSection() {
  return (
    <section className={style.ServiceSection}>
      <h2 className={style.ServiceTitle}>Des forfaits à partir de :</h2>
      <div className={style.ServiceSectionContainer}>
        <Link href='/photos-identite'>
          <ServiceSectionCard
            src={'/assets/photo-identite-main-page.webp'}
            alt={''}
            title={'Photos d identité'}
            price={'9€00'}
          />
        </Link>
        <Link href='/seances-photo'>
        <ServiceSectionCard
          src={'/assets/seances-photo-main-page.webp'}
          alt={''}
          title={'Séances photo'}
          price={'30€00'}
        />
        </Link>
        <Link href='/retouches-photo'>
        <ServiceSectionCard
          src={'/assets/retouches-photo-main-page.webp'}
          alt={''}
          title={'Retouches photo'}
          price={'6€60'}
        />
        </Link>
        <Link href='/impressions-photo'>
        <ServiceSectionCard
          src={'/assets/impressions-photo-main-page.webp'}
          alt={''}
          title={'Impressions photo'}
          price={'0€50'}
        />
        </Link>
      </div>
      <div className={style.HomeService}>
        <div className={style.HomeServiceContainer}>
          <h3 className={style.Title}>Photos d&apos;identité à domicile</h3>
          <p className={style.Price}>À partir de 37€00</p>
        </div>
        <div className={style.HomeServiceFa}>
          <FontAwesomeIcon icon={faCamera} size='2x' />
          <FontAwesomeIcon icon={faPerson} size='2x' />
          <FontAwesomeIcon icon={faBaby} size='2x' />
          <FontAwesomeIcon icon={faWheelchair} size='2x' />
        </div>
        <div>
          <button className={style.ButtonInfo}>Informations</button>
        </div>
      </div>
      <div></div>
    </section>
  )
}
