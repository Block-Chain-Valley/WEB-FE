import Header from "./Header/Header";
import Poll from "./Poll/Poll";
import Filterbutton from "./Filterbutton/Filterbutton";
import Dropdown from "./Dropdown/Dropdown";
import styles from "./Polling.module.css"
import { useState } from "react";


export default function Polling(){
    const [dropdownToggle,setDropdownToggle] = useState(false);

    return(
        <div>
            <Header></Header>
            <section className={styles.filtersection}>
                <Filterbutton title="Tag" setDropdownToggle={setDropdownToggle} dropdownToggle={dropdownToggle}></Filterbutton>
                <Dropdown isVisible = {dropdownToggle}>
                    <ul>
                        <li>Neareast end date</li>
                        <li>Furtheast end date</li>
                        <li>Neareast start date</li>
                        <li>Furtheast start date</li>
                        
                    </ul>
                </Dropdown>
                <Filterbutton title="Sort by neareast end date"></Filterbutton>
                <Filterbutton title="Status"></Filterbutton>
                <Filterbutton title="Type"></Filterbutton>
            </section>
            <Poll></Poll>
            <Poll></Poll>
            <Poll></Poll>
        </div>
    )
}