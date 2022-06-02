import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.scss';

function getInfoItem (info) {
    switch (info.type) {
        case 'prize':
            return <span>{`Prize to Winner - $${info.value} (Included)`}</span>;
        case 'servAndUpd':
            return (
                <div>
                    <span>{`Validation Services & Upgrades ($${info.value} value)`}</span>
                    {info.features && (
                        <ul className={styles.featureList}>
                            {info.features.map((f, i) => {
                                return <li key={i}>✔️ {f}</li>;
                            })}
                        </ul>
                    )}
                </div>
            );
        case 'expected':
            return <span>{`Expected ${info.value}+ Entries`}</span>;
        case 'refund':
            return <span>{`Partial Refund Option`}</span>;

        default:
            break;
    }
}

function Card (props) {
    const {
        data: { color, name, description, price, infolist, text },
    } = props;

    return (
        <div className={styles.priceCard}>
            <div
                className={styles.square}
                style={{
                    borderColor: `${color}`,
                    color: `${color}`,
                }}
            >
                <div>{name}</div>
                <div>{description}</div>
                <div>
                    US$
                    <span>{price}</span>
                </div>
            </div>
            <ul className={styles.infolist}>
                {infolist?.map(i => {
                    return (
                        <li className={styles.infoItem} key={i.type}>
                            {getInfoItem(i)}
                        </li>
                    );
                })}
            </ul>
            <div className={text && styles.text}>{text}</div>
            <Link to='/startContest' style={{ backgroundColor: `${color}` }}>✔️ Start</Link>
        </div>
    );
}

export default Card;
