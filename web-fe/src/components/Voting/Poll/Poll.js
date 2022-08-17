import React from "react";
import styles from './Poll.module.css';


export default function Vonting(){
    return(
        <div className={styles.votingcontainer}>
            <div className={styles.votingcontent}>
                <h5 className={styles.votingflexleft}>
                posted Aug 12 2022
                </h5>
                <h3 className={`${styles.votingtitle} ${styles.votingflexleft}`}>
                MOMC Parameter Changes, SocGen Vault Drawdown Authorization, Recognized Delegate Compensation, HVBank Legal Agreement Amendment - August 12, 2022
                </h3>
                <p className={`${styles.votingsummary} ${styles.votingflexleft}`}>
                MOMC parameter changes, including Stability Fees and Maximum Debt Ceilings, SocGen Vault Drawdown Authorization (OFH token, onboarded as RWA008-A), Recognized Delegates compensation (121,808 DAI), and updating HVBank legal agreement to facilitate the return of funds.
                </p>
                <div className={`${styles.votingtype} ${styles.votingflexleft}`}>
                    <span>Governing Proposal</span>
                </div>
                <div className={`${styles.votingcomment} ${styles.votingflexleft}`}>
                    COMMENTS
                </div>
                <div className={`${styles.votingdetail} ${styles.votingflexleft}`}>
                    <button className={`${styles.votingdetailbutton}`}>View Detail</button>
                    <div>
                        <div>89,882</div>
                        <div>MKR Supporting</div>
                    </div>
                </div>
            </div>
           
                
            <div className={`${styles.votingexecution} ${styles.votingflexleft}`}>
                <p className={`${styles.votingexecutionp}`}>Passed on Aug 12 2022 21:20 UTC. Executed on Aug 14 2022 21:23 UTC.</p>
            </div>

            
        </div>
    )
}