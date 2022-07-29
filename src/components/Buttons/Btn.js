import React from 'react'

const Btn = ({ click, styles, text, type, disabled }) => {
    return (
        <button 
        className={styles} 
        onClick={click}
        type={type} 
        disabled={disabled}
        > 
        {text}
        </button>
    )
}

export default Btn
