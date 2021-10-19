import React, { FC } from 'react'

import styles from './Modal.module.css'

interface ModalProps {
  visible: boolean
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.productModal]

  if (visible) {
    rootClasses.push(styles.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div
        className={styles.productModalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

export default Modal
