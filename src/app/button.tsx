'use client';

import Button from 'react-bootstrap/Button';
import styles from './page.module.css';

export const LifeButton = function () {
    const handleClick = function () {
        console.log('Clicked!');
    };

    return (
        <Button className={styles.life365btn} variant="flat" size="lg" onClick={handleClick}>
            Hello World!
        </Button>
    );
};
