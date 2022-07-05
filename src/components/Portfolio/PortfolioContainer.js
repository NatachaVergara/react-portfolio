import React from 'react'
import CardList from './CardList'
import styles from './CardBody.module.scss'


const PortfolioContainer = () => {

    return (
        <section className={styles.portfolioSection}>
            <CardList />
        </section>
    )
}

export default PortfolioContainer
