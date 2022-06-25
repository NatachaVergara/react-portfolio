import React from 'react'

const BtnEdit = ({onHandleEdit, styles, text}) => {
  return (
    <button onClick={onHandleEdit}  className={styles}> {text} </button>
  )
}

export default BtnEdit