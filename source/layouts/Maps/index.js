import React from 'react'
import styles from './styles.css'



export default ({ currentPage = '' }) => (

<div id="maps" className={styles.map}>
    <div className={styles.mapsContainer}>
        <div className={styles.sectionIcon}><img src="/assets/img/2getgoing_icon_parkrun.png"/>
            <h2>Who's leading the challenge?</h2>
        </div>
    
        <div className="maps">[maps go here]</div>
    </div>
</div>
            

)







