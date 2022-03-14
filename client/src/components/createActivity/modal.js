import React from 'react'
import style from './modal.module.css'

const Modal = ({ setModal }) => {
  const handleClose = () => {
    setModal(false)
  }

  return (
    <div className={style.modal}>
      <div className={style.modalContainer}>
        <h3 className={style.modalTitle}>Activity</h3>
        <h3 className={style.modalTitle}>successfully created</h3>
        <button onClick={handleClose} className={style.modalBtn}>
          Accept
        </button>
      </div>
    </div>
  )
}

export default Modal
