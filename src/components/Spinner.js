import React from 'react'

const Spinner = ({text}) => {
  return (
      <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">{text} </span>
      </div>
  )
}

export default Spinner