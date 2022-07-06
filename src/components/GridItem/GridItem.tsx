import { Level } from "../../helpers/idade";
import  styles from './GridItem.module.css';
import jovem from '../../assets/jovem.png';
import adulto from '../../assets/adulto.png';
import crianca from '../../assets/crianca.png';
import senhor from '../../assets/senhor.png';


type Props = {
    item:Level;
};
export const GridItem = ({item}:Props)=>{ 
    return(
        <div className={styles.main} style={{ backgroundColor:item.color }}>
            <div className={styles.gridIcon}>
                {item.icon === 'jovem' && <img src={jovem} alt="" width="60" />}
                {item.icon === 'adulto' && <img src={adulto} alt="" width="40" />}
                {item.icon === 'crianca' && <img src={crianca} alt="" width="60" />}
                {item.icon === 'senhor' && <img src={senhor} alt="" width="60" />}
            </div>
            <div className={styles.gridTitle}>{item.title}</div>

            {item.yourIdade &&
                <div className={styles.youtIdade}><b>{item.yourName}</b> sua Idade é de <b>{item.yourIdade} </b>anos</div>
            }

            <div className={styles.gridInfo}>
                <>
                    Idade entre <strong>{item.idade[0]}</strong> e <strong>{item.idade[1]}</strong>
                </>
            </div>
        </div>
    )
}