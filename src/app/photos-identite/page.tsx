import styles from './style.module.css'
import IdCard from '../components/idCard/IdCard'
import HeroSectionSecondary from '../components/heroSectionSecondary/HeroSectionSecondary'
import idphoto from '../../app/idphoto.json'

export default function IdPicture() {
  return (
    <>
      <HeroSectionSecondary text={"Photos d'identité"} />

      <section className={styles.Section}>
        {idphoto.map((idphoto) => (
          <div key={idphoto.id}>
            <IdCard
              title={idphoto.title}
              cover={idphoto.cover}
              price={idphoto.price}
              spec={idphoto.specs.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            />
          </div>
        ))}
      </section>
    </>
  )
}
