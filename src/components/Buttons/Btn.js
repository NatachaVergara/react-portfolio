import React from 'react'

const Btn = ({ click,styles, text, type }) => {
    return (
        <button 
        className={styles} 
        onClick={click}
        type={type}
       
        > 
        {text}
        </button>
    )
}

export default Btn
