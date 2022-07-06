import React from 'react'

const Spinner = ({ styles }) => {
  return (
    <div className={`spinner-grow text-dark ${styles.spinner}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}

export default Spinner