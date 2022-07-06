import React from 'react'

const BtnAdd = ({ type, onHandleClick, styles, text, disabled }) => {
    return (
        <button 
        disabled={disabled}
        type={type}  onClick={onHandleClick} className={styles}> {text}  </button>
    )
}

export default BtnAdd