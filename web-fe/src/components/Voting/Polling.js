import Header from "./Header/Header";
import Poll from "./Poll/Poll";
import Filterbutton from "./Filterbutton/Filterbutton";
import Dropdown from "./Dropdown/Dropdown";
import styles from "./Polling.module.css"
import {  useState } from "react";


export default function Polling(){
    const [dropdownToggle1,setDropdownToggle1] = useState(false);
    const [dropdownToggle2,setDropdownToggle2] = useState(false);
    const [dropdownToggle3,setDropdownToggle3] = useState(false);
    const [dropdownToggle4,setDropdownToggle4] = useState(false);

    

    return(
        <div>
            <Header></Header>
            <section className={styles.filtersection}>
                <div className={styles.filter}>
                    <Filterbutton  title="Tag" setDropdownToggle={setDropdownToggle1} dropdownToggle={dropdownToggle1}></Filterbutton>
                    <Dropdown isVisible = {dropdownToggle1} setDropdownToggle={setDropdownToggle1}>
                            <ul >
                                <li>Neareast end date</li>
                                <li>Furtheast end date</li>
                                <li>Neareast start date</li>
                                <li>Furtheast start date</li>
                            </ul>
                    </Dropdown>
                </div>
                
                <div className={styles.filter}>
                    <Filterbutton title="Sort by neareast end date" setDropdownToggle={setDropdownToggle2} dropdownToggle={dropdownToggle2}></Filterbutton>
                    <Dropdown isVisible = {dropdownToggle2}>
                            <ul>
                                <li>Neareast end date</li>
                                <li>Furtheast end date</li>
                                <li>Neareast start date</li>
                                <li>Furtheast start date</li>
                            </ul>
                    </Dropdown>
                </div>
                <div className={styles.filter}>
                    <Filterbutton title="Status" setDropdownToggle={setDropdownToggle3} dropdownToggle={dropdownToggle3}></Filterbutton>
                    <Dropdown isVisible = {dropdownToggle3}>
                            <ul>
                                <li>Neareast end date</li>
                                <li>Furtheast end date</li>
                                <li>Neareast start date</li>
                                <li>Furtheast start date</li>
                            </ul>
                    </Dropdown>
                </div>
                <div className={styles.filter}>
                    <Filterbutton title="Type" setDropdownToggle={setDropdownToggle4} dropdownToggle={dropdownToggle4}></Filterbutton>
                    <Dropdown isVisible = {dropdownToggle4}>
                            <ul>
                                <li>Neareast end date</li>
                                <li>Furtheast end date</li>
                                <li>Neareast start date</li>
                                <li>Furtheast start date</li>
                            </ul>
                    </Dropdown>
                </div>
                
            </section>
            <Poll></Poll>
            <Poll></Poll>
            <Poll></Poll>
        </div>
    )
}