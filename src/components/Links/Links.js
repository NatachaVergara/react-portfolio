import React from 'react'
import { Link } from 'react-router-dom'
const Links = ({ to, styles, name }) => {
    return (

        <Link to={to} className={styles}> {name} </Link>

    )
}

export default Links