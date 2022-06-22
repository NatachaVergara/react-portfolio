import React from 'react'

const Btn = ({ onHandleLogout, btnstyle, btnName }) => {
    return (
        <button className={btnstyle} onClick={onHandleLogout }>
            {btnName}
        </button>
    )
}

export default Btn
