import React from 'react'
import styles from './CardBody.module.scss'
import CarouselPortfolio from './CarouselPortfolio'


const PortfolioContainer = () => {

    return (
        <section className={styles.portfolioSection}>
            {/* <CardList /> */}
           <div className='container'>
           <CarouselPortfolio/>
           </div>
        </section>
    )
}

export default PortfolioContainer
