import React from 'react'
import styles from './styles.css'

export default (props) => (
  <section className="intro">
    <div id="getgoing" className={styles.getGoing}>
    <div className={styles.getsGoingContainer}>
    <div className={styles.sectionIcon}><img src="/layouts/Intro/2getgoing_icon_parkrun.png" />
    <h2 className={styles.getGoing}>How to get going today</h2></div>
        <div className={styles.iconsContainer}>
        <div className={styles.iconsBox}><img src="/layouts/Intro/2getgoing_icon_register.png" /><span><h3 className={styles.getGoing}>Register</h3></span><p className={styles.getGoing}>Sign up for free and set your distance and fundraising goals</p></div>
        <div className={styles.iconsBoxArrow}><img src="/layouts/Intro/2getgoing_icon_whitearrow.png" /></div>
        <div className={styles.iconsBox}><img src="/layouts/Intro/2getgoing_icon_megaphone.png" /><span><h3 className={styles.getGoing}>Shout about it</h3></span><p className={styles.getGoing}>Tell people what you’re doing and get them to support you</p></div>
        <div className={styles.iconsBoxArrow}><img src="/layouts/Intro/2getgoing_icon_whitearrow.png" /></div>
        <div className={styles.iconsBox}><img src="/layouts/Intro/2getgoing_icon_clock.png" /><span><h3 className={styles.getGoing}>Run</h3></span><p className={styles.getGoing}>Track your kilometres in Strava and put your parkrun on the map</p></div>
        <div className={styles.clearBoth}></div>
        </div>
        

    <div className={styles.clearBoth}></div>
    </div>
    </div>
</section>
)







