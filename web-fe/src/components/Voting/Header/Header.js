import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

export default function Header(){
    return(
        <header className={styles.header}>
            <nav>
                <div><Link to='/voting'>MAIN</Link></div>
                <div><Link to='/voting/polling'>Polling</Link></div>
                <div><Link to='/voting/executive'>Executive</Link></div>
                <div><Link to='/voting/howto'>How to</Link></div>
            </nav>
            <div>
                <div>메인넷</div>
                <div>connect wallet</div>
                <div>etc</div>
            </div>
        </header>
    )
}