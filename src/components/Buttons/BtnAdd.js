import React from 'react'

const BtnAdd = ({ type, onHandleClick, styles, text }) => {
    return (
        <button  type={type}  onClick={onHandleClick} className={styles}> {text}  </button>
    )
}

export default BtnAdd