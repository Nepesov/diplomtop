import React from 'react'
import styles from './DivExplore.module.css'
import rocketImage from '../../../img/rocketExplore.png' 
import ExploreBtn from '../exploreBTN/ExploreBtn'

const DivExplore = () => {
  return (
    <div className={styles.div__explore}>
        <div><img className={styles.div__explore__img} src={rocketImage} alt="Rocket" /></div>
        {/* <div style={{fontSize: 20, margin:'0 auto'}}>We represent the interests of space x in Russia for the sale of clothing</div> */}
        <ExploreBtn></ExploreBtn>
    </div>
  )
}

export default DivExplore
