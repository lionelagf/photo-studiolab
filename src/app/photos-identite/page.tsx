import styles from './style.module.css'
import IdCard from '../components/idCard/IdCard'
import HeroSectionSecondary from '../components/heroSectionSecondary/HeroSectionSecondary'

export default function IdPicture() {
  const specsPref = [
    'Taille 3,5x4,5cm',
    'Fond gris clair',
    'Planche de 6 photos',
    'Valable 6 mois',
  ]
  const specsAnts = [
    'Taille 3,5x4,5cm',
    'Fond gris clair',
    'Planche de 4 photos',
    'Code identifiant e-photo',
  ]
  const specsCv = [
    '1 Photo numérique HD',
    'Déclinaison Linkedin',
    'Fond clair',
    'Accompagnement et conseils',
  ]
  const specsUsa = [
    'Taille 5x5cm',
    'Fond blanc',
    'Planche de 4 photos',
    'Valable 6 mois',
  ]
  const specsCanada = [
    'Taille 5x7cm',
    'Fond blanc',
    'Planche de 3 photos',
    'Tampon et signature',
  ]
  const specsChine = [
    'Taille 5x7cm',
    'Fond blanc',
    'Planche de 3 photos',
    'Valable 6 mois',
  ]
  const specsScolaire = [
    'Taille 3,5x4,5cm',
    'Fond blanc',
    'Planche de 6 photos',
  ]
  const specsSurMesure = [
    'Taille sur mesure',
    'Fond sur mesure',
    'Planche sur mesure',
  ]
  return (
    <>
      <HeroSectionSecondary text={"Photos d'identité"} />

      <section className={styles.Section}>
        <IdCard
          src={'/assets/img/photo-studiolab-id-nourrisson.webp'}
          title={'Carte nationale d’identité - Nourrisson'}
          price={'15€00'}
          spec={specsPref.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />

        <IdCard
          src={'/assets/img/photo-studiolab-id-prefecture.webp'}
          title={'Carte nationale d’identité - Adulte'}
          price={'9€00'}
          spec={specsPref.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <IdCard
          src={'/assets/img/photo-studiolab-id-ants.webp'}
          title={'ANTS - E-photo'}
          price={'15€00'}
          spec={specsAnts.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <IdCard
          src={'/assets/img/photo-studiolab-id-cv.webp'}
          title={'CV - Linkedin'}
          price={'20€00'}
          spec={specsCv.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <IdCard
          src={'/assets/img/photo-studiolab-id-usa-inde.webp'}
          title={'Visa Etat Unis - Inde - Israël'}
          price={'15€00'}
          spec={specsUsa.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <IdCard
          src={'/assets/img/photo-studiolab-id-canada.webp'}
          title={'Passeport canada'}
          price={'15€00'}
          spec={specsCanada.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <IdCard
          src={'/assets/img/photo-studiolab-id-chine.webp'}
          title={'Visa chinois'}
          price={'15€00'}
          spec={specsChine.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <IdCard
          src={'/assets/img/photo-studiolab-id-ecole.webp'}
          title={'Scolaire'}
          price={'10€00'}
          spec={specsScolaire.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <IdCard
          src={'/assets/img/photo-studiolab-id-sur-mesure.webp'}
          title={'Sur mesure'}
          price={'15€00'}
          spec={specsSurMesure.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
      </section>
    </>
  )
}
