'use client'

import styles from './Navbar.module.css'
import { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
  const [nav, setNav] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={`md:flex ${nav ? 'hidden' : 'flex'}`}>
        <ul className='hidden md:flex gap-7'>
          <li className={styles.navPrimary}>
            <Link href='/'>Accueil</Link>
          </li>
          <li className={styles.navPrimary}>
            <Link href='/photos-identite'>Photos d&apos;identité</Link>
          </li>
          <li className={styles.navPrimary}>
            <Link href='/seances-photo'>Séances photo</Link>
          </li>
          <li className={styles.navPrimary}>
            <Link href='/retouches-photo'>Retouches photo</Link>
          </li>
          <li className={styles.navPrimary}>
            <Link href='/impression-photo'>Impressions et encadrements</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className='hiden md:flex gap-7'>
          <li className={styles.navSecondary}>Rendez-vous / Devis</li>
          {/* <li className={styles.navSecondary}>Devis</li> */}
        </ul>
      </nav>
      <div
        onClick={() => setNav(!nav)}
        className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'
      >
        {nav ? (
          <FontAwesomeIcon icon={faTimes} size='2x' />
        ) : (
          <FontAwesomeIcon icon={faBars} size='2x' />
        )}
      </div>
      {nav && (
        <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-white text-black'>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link href='/photos-identite'>Photos d&apos;identité</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link href='/seances-photo'>Séances photo</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link href='/retouches-photo'>Retouches photo</Link>
          </li>
          <li className='px-4 cursor-pointer capitalize py-6 text-4xl'>
            <Link href='/impression-photo'>Impression photo</Link>
          </li>
        </ul>
      )}
    </header>
  )
}
