import { useState } from "react"
import Modal from "../Modal/Modal"
import styles from "./ConnectWalletbutton.module.css"


export default function ConnectWalletbutton(){
    const [modalToggle,setModalToggle] = useState(false);

    return(
        <div className={styles.button} onClick={()=>{setModalToggle(true); console.log(setModalToggle,modalToggle);}}>
            Connect wallet
            {
                modalToggle
                ?<Modal setModalToggle={setModalToggle} modalToggle={modalToggle}></Modal>
                :null
            }
        </div>
    )
}