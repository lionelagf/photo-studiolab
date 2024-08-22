import Link from 'next/link'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <section className='NotFound'>
      <h1 className='Title'>404</h1>
      <p className='Subtitle'>Oops !</p>
      <p className='Subtitle'>
        Cette page est dans le floue, refaisons la mise au point.
      </p>
      <button className='Button'>
        <Link href='/'>Accueil</Link>
      </button>
    </section>
  )
}
