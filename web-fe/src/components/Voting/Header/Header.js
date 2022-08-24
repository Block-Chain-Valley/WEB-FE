import React, { useState } from 'react';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import ConnectWalletbutton from '../ConnectWalletbutton/ConnectWalletbutton';
import dataWalletbutton from'./dataWalletbutton.json'

export default function Header(props){
    
    const [toggle,setToggle] = useState(true);

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.Link} to='/voting'><img className={styles.headerlogo} src={`${process.env.PUBLIC_URL}/img/BV_Logo.svg`}/></Link>
                {   
                    toggle
                    ?<ul className={styles.ul}>
                        <li className={styles.li}><Link className={styles.Link} to='/voting/polling'>Polling</Link></li>
                        <li className={styles.li}><Link className={styles.Link} to='/voting/executive'>Executive</Link></li>
                        <li className={styles.li}><Link className={styles.Link} to='/voting/howto'>How to</Link></li>
                    </ul>
                    :null
                }
                
            </nav>
            {
                toggle
                ?
                    <div className={styles.walletbuttoncontainer}>
                    <ConnectWalletbutton></ConnectWalletbutton>
                        
                    
                    </div>
                :
                    null
            }
            
            
            <a className={styles.toggleBtn} href='#' onClick={()=>{setToggle(!toggle);}}>
                <img className={styles.toggleImg} src={`${process.env.PUBLIC_URL}/img/hamburger.png`}></img>
            </a>
        </header>
    )
}