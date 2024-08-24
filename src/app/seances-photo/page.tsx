import styles from './style.module.css'
import StudioCard from '../components/studioCard/StudioCard'
import photoshoots from '../../app/photoshoot.json'
import HeroSectionSecondary from '../components/heroSectionSecondary/HeroSectionSecondary'

export default function SeancesPhoto({ category }:any) {

 const srdvPhotoshoots = photoshoots.filter(
    (photoshoot) => photoshoot.category === 'srdv'
  );

  const ardvPhotoshoots = photoshoots.filter(
    (photoshoot) => photoshoot.category === 'ardv'
  );
  

  return (
    <>
      <HeroSectionSecondary text={'Séances photo'} />
      <section className={styles.Section}>
        <h2 className={styles.Category}>Sans Rendez-vous</h2>
        {srdvPhotoshoots.map((photoshoot) => (
          <div key={photoshoot.id}>
            <StudioCard
              title={photoshoot.title}
              cover={photoshoot.cover}
              price={photoshoot.price}
              description={photoshoot.description}
              spec={photoshoot.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            />
          </div>
        ))}

        <h2 className={styles.Category}>Avec Rendez-vous</h2>
        {ardvPhotoshoots.map((photoshoot) => (
          <div key={photoshoot.id}>
            <StudioCard
              title={photoshoot.title}
              cover={photoshoot.cover}
              price={photoshoot.price}
              description={photoshoot.description}
              spec={photoshoot.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            />
          </div>
        ))}
      </section>
    </>
  )
}
