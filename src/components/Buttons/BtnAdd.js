import React from 'react'

const BtnAdd = ({ text, disabled, click }) => {
    return (
        <button
            disabled={disabled}
            type={'submit'}
            onClick={click}
            className={'btn btn-outline-danger mt-5'}>
            {text}
        </button>
    )
}

export default BtnAdd