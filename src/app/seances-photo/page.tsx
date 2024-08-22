import styles from './style.module.css'
import StudioCard from '../components/studioCard/StudioCard'

import HeroSectionSecondary from '../components/heroSectionSecondary/HeroSectionSecondary'

export default function SeancesPhoto() {

const specsExpress = [
  'Environ 15min',
  '3 photos numérique HD',
  'Retrait immédiat',
]
const specsPortrait = [
  'Environ 30min',
  '5 photos numérique HD',
  '1 personne',
  'Retrait immédiat',
]
const specsFamille = [
  'Environ 30min',
  '5 photos numérique HD',
  'Plusieurs personne',
  'Retrait immédiat',
]

  return (
    <>
      <HeroSectionSecondary text={'Séances photo'} />
      <section className={styles.Section}>
        <h2 className={styles.Category}>Sans Rendez-vous</h2>
        <StudioCard
          src={'/assets/img/photo-studiolab-express.webp'}
          title={'Séance express'}
          price={'30€00'}
          text={
            'Besoin d’un portrait professionnel ? Que ce soit votre première séance ou que vous soyez habitué, notre photographe est là pour vous accompagner. Venez vivre une expérience unique.'
          }
          spec={specsExpress.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <h2 className={styles.Category}>Avec Rendez-vous</h2>
        <StudioCard
          src={'/assets/img/photo-studiolab-portrait.webp'}
          title={'Séance portrait - corporate'}
          price={'70€00'}
          text={
            'Besoin d’un portrait professionnel ? Que ce soit votre première séance ou que vous soyez habitué, notre photographe est là pour vous accompagner. Venez vivre une expérience unique.'
          }
          spec={specsPortrait.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <StudioCard
          src={'/assets/img/photo-studiolab-famille-sur-mesure.webp'}
          title={'Séance Famille'}
          price={'90€00'}
          text={
            'Besoin d’un portrait professionnel ? Que ce soit votre première séance ou que vous soyez habitué, notre photographe est là pour vous accompagner. Venez vivre une expérience unique.'
          }
          spec={specsFamille.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
        <StudioCard
          src={'/assets/img/photo-studiolab-express.webp'}
          title={'Séance Packshot'}
          price={'30€00'}
          text={
            'Besoin d’un portrait professionnel ? Que ce soit votre première séance ou que vous soyez habitué, notre photographe est là pour vous accompagner. Venez vivre une expérience unique.'
          }
          spec={specsExpress.map((spec) => (
            <li key={spec}>{spec}</li>
          ))}
        />
      </section>
    </>
  )
}
