import styles from "./Modal.module.css"

export default function Modal({modalToggle,setModalToggle}){
    return(
        <div className={styles.modalbox}>
            <div className={styles.modal}>
                <div className={styles.modaltop} onClick={()=>{setModalToggle(false); console.log(modalToggle,setModalToggle)}}>
                    <span>
                        Select Wallet  
                    </span>
                    <img src={process.env.PUBLIC_URL+'/img/x-button.svg'} ></img>
                </div>
                <div className={styles.walletlist}>
                    <img src={process.env.PUBLIC_URL+"/img/클립파비콘.png"}></img>
                    <span>  Kilp</span>
                </div>
                <div className={styles.walletlist}>
                    <img src={process.env.PUBLIC_URL+"/img/카이카스파비콘.jpeg"}></img>
                    <span>  Kaikas</span>
                </div>
            </div>
        </div>
    )
}