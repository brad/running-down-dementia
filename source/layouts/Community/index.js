import React from 'react'
import styles from './styles.css'

export default ({ currentPage = '' }) => (

<div id="community" className={styles.community}>
    <div className={styles.communityContainer}>
        <div className={styles.iconsBoxContainerTwo}>
            <h3 className={styles.communityHeading}>Parkrun community global challenge</h3>
            
            <div className={styles.iconsBoxSubContainer}>
            <div className={styles.iconsBox}><img src="/layouts/Community/5challenge_icon_worldwhite.png" /><br /> <span className={styles.iconSubHeading}>Run</span><span className={styles.iconSubText}>right around the
world collectively</span></div>
            <div className={styles.iconsBoxArrow}><img src="/layouts/Community/5challenge_icon_plus.png" /></div>
            <div className={styles.iconsBoxThree}><img src="/layouts/Community/5challenge_icon_circles.png" /><br />
            <span className={styles.iconSubHeading}>Raise</span> <span className={styles.iconSubText}>resistance,awareness, money</span></div> 
            <div className={styles.clearBoth}></div>
            <p><img src="/layouts/Community/5challenge_icon_marker.png" /></p>
            <p><span className={styles.strapline}>whether it takes 5 days, 5 weeks, 5 months...</span></p> 
            </div></div>

</div><div className={styles.clearBoth}></div></div>

)



