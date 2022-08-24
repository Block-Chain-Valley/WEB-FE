import styles from "./Modal.module.css"

export default function Modal(){
    return(
        <div className={styles.modalbox}>
            <div className={styles.modal}>
                <div className={styles.modaltop}>
                    <span>
                        Select Wallet  
                    </span>
                    <img src={process.env.PUBLIC_URL+'/img/x-button.svg'}></img>
                </div>
                <div className={styles.walletlist}>
                    <span>Kilp</span>
                </div>
            </div>
        </div>
    )
}