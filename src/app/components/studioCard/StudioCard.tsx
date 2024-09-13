'use client'

import Image from 'next/image'
import styles from './StudioCard.module.css'
import { Modal } from '../modal/Modal'
import { useState } from 'react'

export default function StudioCard({
  cover,
  title,
  price,
  description,
  spec,
  advice,
  option,
}: any) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className={styles.card}>
      <Image
        src={cover}
        width={500}
        height={334}
        alt='Logo du studio Photo StudioLab'
        className={styles.img}
      />
      <div className={styles.infoContainer}>
        <div>
          <h2 className={styles.infoTitle}>{title}</h2>
          <h3 className={styles.infoSubtitle}>{price}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
        <div className={styles.infoSide}>
          <div className={styles.specContainer}>
            <p className={styles.infoSideTitle}>Spécificités :</p>
            <ul className={styles.list}>{spec}</ul>
          </div>
          <div className={styles.buttonContainer}>
            <button className='Button'>Galerie</button>

            <button
              className='Button'
              onClick={() => {
                setIsModalOpen(true)
              }}
            >
              Informations supplémentaires
            </button>
            <Modal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false)
              }}
              advice={advice}
              option={option}
            ></Modal>
          </div>
        </div>
      </div>
    </div>
  )
}
