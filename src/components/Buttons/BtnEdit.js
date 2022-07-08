import React from 'react'
import { MdModeEdit } from 'react-icons/md';
const BtnEdit = ({ onedit }) => {
  return (
    <button
      onClick={onedit}
      className={'btn btn-outline-success me-1'}>
      <MdModeEdit />
    </button>
  )
}

export default BtnEdit