import HeroSectionSecondary from '../components/heroSectionSecondary/HeroSectionSecondary'

import styles from './style.module.css'

export default function MentionsLegales() {
  return (
    <>
      <HeroSectionSecondary text={'Mentions Légales'} />
      <section className={styles.Section}>
        <p>
          Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004
          pour la confiance en l&apos;économie numérique, il est précisé aux
          utilisateurs du site Photo StudioLab l&apos;identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi.
        </p>
        <h2>Edition du site</h2>
        <p>
          Le présent site, accessible à l’URL www.photo-studiolab.fr (le « Site
          »), est édité par : Georges Coupigny, résidant 89 rue de la glacière
          75013 paris, de nationalité Française (France), né(e) le 04/05/1963,
          inscrite au R.C.S. de PARIS sous le numéro RCS PARIS A 483867776, Le
          numéro individuel TVA de l’éditeur est : FR86483867776.
        </p>
        <h2>Hébergement</h2>
        <p>
          Le Site est hébergé par la société OVH SAS, situé 2 rue Kellermann -
          BP 80157 - 59053 Roubaix Cedex 1, (contact téléphonique ou email :
          1007).
        </p>
        <h2>Directeur de publication</h2>
        <p>Le Directeur de la publication du Site est Georges Coupigny.</p>
        <h2>Nous contacter</h2>
        <p>Par téléphone : +33145802984</p>
        <p>Par email : infos@photo-studiolab.fr</p>
        <p>Par courrier : 89 rue de la glacière 75013 paris</p>
      </section>
    </>
  )
}
