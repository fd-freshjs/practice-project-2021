import React from 'react';
import Header from '../../components/Header/Header';
import Card from './Card';
import styles from './Card.module.scss';

// представим что файл приходит по сети
import cards from './prices.json';

function Pricing () {
    return (
        <>
            <Header />
            <div className={styles.page}>
                <ul className={styles.cards}>
                    {cards.map(c => {
                        return (
                            <li className={styles.cardWrapper} key={c.name}>
                                <Card data={c} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}

export default Pricing;
