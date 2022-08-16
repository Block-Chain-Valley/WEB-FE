import React from 'react';
import styles from './Header.module.css';

export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <div>MAIN</div>
                <div>Polling</div>
                <div>Executive</div>
                <div>How to</div>
            </nav>
            <div>
                <div>메인넷</div>
                <div>connect wallet</div>
                <div>etc</div>
            </div>
        </header>
    )
}