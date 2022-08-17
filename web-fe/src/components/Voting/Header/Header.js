import React, { useState } from 'react';

import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Walletbutton from '../Walletbutton/Walletbutton';
import dataWalletbutton from'./dataWalletbutton.json'

export default function Header(){
    
    let [toggle,setToggle] = useState(false);

    return(
        <header className={styles.header}>
            <nav className={styles.nav}>
                <Link className={styles.Link} to='/voting'><img className={styles.headerlogo} src='img/BV_Logo.svg'/></Link>
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
                    {
                        dataWalletbutton.map((item,index)=>{
                            return(<Walletbutton imgURL={item.imgURL} buttonTitle={item.buttonTitle} className={styles.walletbutton}></Walletbutton>)
                        })
                    }
                    </div>
                :
                    null
            }
            
            
            <a className={styles.toggleBtn} href='#' onClick={()=>{setToggle(!toggle);}}>
                <img className={styles.toggleImg} src='img/hamburger.png'></img>
            </a>
        </header>
    )
}