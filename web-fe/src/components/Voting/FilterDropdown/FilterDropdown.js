import { useRef,useEffect } from "react";
import styles from "./FilterDropdown.module.css"

export default function FilterDropdown(props){
    const fd = useRef();

    const handlClickOutside= event =>{
        if( props.dropdownToggle && !fd.current.contains(event.target)) props.setDropdownToggle(false);
    }

    useEffect(()=>{
        window.addEventListener('click',handlClickOutside);
        console.log(fd);
        return ()=>{
            window.removeEventListener('click', handlClickOutside);
            console.log('removeclick');

        };
    },[props.dropdownToggle]);


    return(
        <div className={styles.filter} ref={fd}>
            {props.children}
        </div>
    )
}