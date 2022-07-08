import React from 'react'
import { MdOutlineDelete } from 'react-icons/md';
const BtnDelete = ({ ondelete }) => {
  return (
    <button
      onClick={ondelete}
      className={'btn btn-outline-danger'}>
      < MdOutlineDelete />
    </button>
  )
}

export default BtnDelete