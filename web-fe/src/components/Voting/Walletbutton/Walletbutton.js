import styles from "./Walletbutton.module.css"


export default function Walletbutton(Props){
    return(
        <button className={styles.button}>
            {
                Props.imgURL==""
                ? null
                :<img alt="" src={Props.imgURL} ></img>
            }
            {
                Props.buttonTitle==""
                ? null
                : <div>{Props.buttonTitle}</div>

            }
        </button>
    )
}