/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import CardList from './CardList'
import '../Styles/CardBody.css'
//import { useUserContext } from '../../Store/useContext'

const PortfolioContainer = () => {
//const {findProyects} = useUserContext()

    // useEffect(() => {
    //     console.log('useEffect find proyects')
    //     findProyects()
    // }, [])

    return (
        <section className='portfolio-section'>
            <CardList />
        </section>
    )
}

export default PortfolioContainer
