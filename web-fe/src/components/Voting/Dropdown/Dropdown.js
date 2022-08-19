import { useEffect, useRef, useState } from 'react';
import styles from './Dropdown.module.css'

const Dropdown = (props) =>{
    const [aniVisible,setAniVisible] = useState(false); 
    const [repeat,setRepeat] = useState(null);
    const dd = useRef();

    const handlClickOutside= event =>{
        if( props.isVisible && !dd.current.contains(event.target)) props.setDropdownToggle(false);
    }

    useEffect(()=>{
        window.addEventListener('click',handlClickOutside);
        return ()=>{
            window.removeEventListener('click', handlClickOutside);
        };
    },[])
    useEffect(()=>{
        if(props.isVisible){
            clearTimeout(repeat);
            setRepeat(null);
            setAniVisible(true);
        }
        else{
            setRepeat(setTimeout(()=>{
                setAniVisible(false);
            },400));
        }
    },[props.isVisible]);


    return(
        <article ref={dd} className={`${styles.dropdown} ${ props.isVisible ? styles.slidefadeindropdown : styles.slidefadeoutdropdown}`}>
            {
                aniVisible&&props.children
            }
        </article>
    )
};

export default Dropdown;