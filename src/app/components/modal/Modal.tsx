import { useEffect, useRef } from 'react'
import style from './Modal.module.css'

export const Modal = ({
  isOpen,
  onClose,
  // children,
  advice,
  option
}: {
  isOpen: boolean
  onClose: () => void
  // children: React.ReactNode
  advice: string[]
  option: string[]
}) => {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.classList.add(style.noScroll)
    } else {
      document.body.classList.remove(style.noScroll)
    }

    window.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.classList.remove(style.noScroll)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <>
      <div className={style.modalBackdrop}>
        <div className={style.modalContent} ref={modalRef}>
          <button onClick={onClose}>Close</button>
          <div>
            <div>
              <h2>Quelques conseils</h2>
              <ul>
                {advice.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Options supplémentaires</h2>
              <ul>
                {option.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* {children} */}
        </div>
      </div>
    </>
  )
}
