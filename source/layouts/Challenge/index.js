import React from 'react'
import styles from './styles.css'
import ChallengeSlides from '../../components/ChallengeSlides'


export default ({ currentPage = '' }) => (

<section id="challenge" className={styles.challenge}>
        <div className={styles.challengeContainer}>
        
                <div className={styles.iconsContainer}>
                
                        <div className={styles.iconsBoxContainer}>
                                
                                <h3>It's a big challenge.</h3>
                                <h4>Personal challenge</h4>
                                <div className={styles.iconsBoxSubContainer}>
                                        <div className={styles.iconsBox}><img src="/assets/img/5challenge_icon_runner.png" /><br />Run <span className={styles.iconsSubText}>100km</span></div>
                                        <div className={styles.iconsBox}><img src="/assets/img/5challenge_icon_plus.png" /></div>
                                        <div className={styles.iconsBox}><img src="/assets/img/5challenge_icon_money.png" /><br />Raise <span className={styles.iconsSubText}>£100</span></div>
                                </div>
                        </div>
                        
                        
                        
                        <div className="slideshow">
                        
                            <div className="padding">
                                                               
                               <ChallengeSlides/>
                                 
                             </div>    
                                 
                       </div>
                                                        
                </div>
                
                 <div className={styles.clearBoth}></div>
                
        </div>
        
  </section >      
            

)







