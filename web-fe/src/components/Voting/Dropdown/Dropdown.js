import { useEffect, useState } from 'react';
import styles from './Dropdown.module.css'

const Dropdown = (props) =>{
    const [aniVisible,setAniVisible] = useState(false);

    useEffect(()=>{
        if(props.isVisible){
            setAniVisible(true);
        }
        else{
            setTimeout(()=>{
                setAniVisible(false);
            },400);
        }
    },[props.isVisible]);


    return(
        <article className={`${styles.dropdown} ${ props.isVisible ? styles.slidefadeindropdown : styles.slidefadeoutdropdown}`}>
            {
                aniVisible&&props.children
            }
        </article>
    )
};

export default Dropdown;