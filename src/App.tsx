import { useState } from 'react'
import styles from './App.module.css'
import poweredImage from './assets/logo.png'
import leftarrowImage from './assets/leftarrow.png'
import { levels, calculateIdade, Level } from './helpers/idade'
import { GridItem } from './components/GridItem'

const App = () => {

  const [nomeField, setNomeField] = useState<string>();
  const [dataField, setDataField] = useState<number>(0);
  const [toShow,setToShow] = useState<Level | null>(null);


  const handleCalculateButton = ()=>{
    if(nomeField && dataField){
      setToShow(calculateIdade(dataField, nomeField));
    }else{
      alert("Preencha todos os campos")
    }
  }
const handleBackButton = () =>{
  setToShow(null);
  setNomeField('');
  setDataField(0)
}
  

  return(
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={70}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftSide}>  
          <h1>Saiba se é necessário Votar.</h1>
          <p>Podem votar cidadãs e cidadãos que estão com a situação regular na Justiça Eleitoral, ou seja, sem pendências que os impeçam de exercer o direito ao voto.</p>

          <input type="text" placeholder="Digite seu Nome e Sobrenome" value={nomeField} onChange={e => setNomeField(e.target.value)} 
          disabled={toShow ? true : false}
          />

          <input type="number" placeholder="Digite sua Data de Nascimento Ex.: (27/02/2000)" value={dataField > 0 ? dataField : ''} onChange={e => setDataField(parseFloat(e.target.value))}
          disabled={toShow ? true : false}
          />

          <button onClick={handleCalculateButton} disabled={toShow ? true : false}>Calcular</button>

        </div>
        <div className={styles.rightSide}>  
        {!toShow &&
            <div className={styles.grid}>
              {levels.map((item, key)=>(
                <GridItem key={key} item={item} />
              ))}
            </div>
        }
        {toShow &&  
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={
              handleBackButton}>
              <img src={leftarrowImage} alt="" />
            </div>
            <GridItem item={toShow} />
          </div>
        }
        </div>
      </div>
    </div>
  )
}

export default App;