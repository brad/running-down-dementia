import React from 'react'
import NavLink from '../../components/NavLink'
import PageNav from '../PageNav'
import styles from './styles.css'

export default (props) => (
    <header>
        
        <section className="main-banner">
        <div id="banner"  className={styles.banner}>
        <PageNav/>


    <div className={styles.bannerContainer}>
        
        <img className={styles.arukPRLogo} src="/layouts/Header/1banner_rddlogo.png" />
        <h2 className={styles.bannerContainer}>#TeamARUKparkrun is out to make dementia a distant memory. Join us.</h2>
        <h3 className={styles.bannerContainer}>Challenge yourself to run 100km and raise £100 over the summer.  Don’t worry, you don’t have to do it all at once! Simply track your run and help us to Run Down Dementia.</h3>

        <div className={styles.registerButton}><a href="https://registration.everydayhero.com/ps/event/AlzheimersResearchUKParkrun">Register for free</a></div>
        
        <div id="edh_totals" className={styles.iconsContainer}>
        
        </div>

        </div>

    </div>
   
    </section>
  </header> 
  
)



