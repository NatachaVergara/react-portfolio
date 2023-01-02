import React from 'react'

const Btn = ({ click, styles, text, type, disabled, title }) => {
    return (
        <button 
        className={styles} 
        onClick={click}
        type={type} 
        disabled={disabled}
        title={title}
        > 
        {text}
        </button>
    )
}

export default Btn
