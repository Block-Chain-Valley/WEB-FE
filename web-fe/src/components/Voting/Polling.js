import Header from "./Header/Header";
import Poll from "./Poll/Poll";
import Filterbutton from "./Filterbutton/Filterbutton";
import styles from "./Polling.module.css"

export default function Polling(){
    return(
        <div>
            <Header></Header>
            <section className={styles.filtersection}>
                <Filterbutton title="Tag"></Filterbutton>
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