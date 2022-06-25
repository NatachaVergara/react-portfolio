import React from 'react'

const BtnDelete = ({ onHandleDelete, styles, text }) => {
  return (
    <button onClick={onHandleDelete} className={styles}> {text} </button>
  )
}

export default BtnDelete