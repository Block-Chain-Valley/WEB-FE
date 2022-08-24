import { useState } from "react"
import Modal from "../Modal/Modal"
import styles from "./ConnectWalletbutton.module.css"


export default function ConnectWalletbutton(Props){
    const [modalToggle,setModalToggle] = useState(false);

    return(
        <div className={styles.button} onClick={()=>{setModalToggle(true)}}>
            Connect wallet
            {
                modalToggle
                ?<Modal setModalToggle={setModalToggle}></Modal>
                :null
            }
        </div>
    )
}