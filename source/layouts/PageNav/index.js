import React from 'react'
import NavLink from '../../components/NavLink'
import styles from './styles.css'

export default ({ currentPage = '' }) => (
 
    <nav role='navigation'>
    <div className={styles.navBar} >

      <div className={styles.navbarHeader}>
      
        <div id={styles.mobilemenu}>
          <div className={styles.mobileMenuHolder}>
              <img src="/layouts/PageNav/1banner_icon_mobilemenu.png" width="50" height="50" alt=""/>
          </div>
        </div>
  
        <span className={styles.tools}>
          <ul><li><a id="edh_search"><img src="/layouts/PageNav/1banner_magnifyer.png" /></a></li>
            <li><a className={styles.login} href="#">login</a></li>
            <li><a href="#"><img src="/layouts/PageNav/1banner_facebook.png" /></a></li>
            <li><a href="#"><img src="/layouts/PageNav/1banner_twitter.png" /></a></li>
            </ul>
        </span>
        
        <span className={styles.navBarMenu}>
          <ul>
            <li><NavLink to={`${currentPage}/#faqs`}>FAQS</NavLink></li>
            <li><NavLink to={`${currentPage}/#participants`}>Participants</NavLink></li>
            <li><NavLink to={`${currentPage}/#leaderboards`}>Leaderboards</NavLink></li>
            <li><NavLink to={`about`}></NavLink></li>
          </ul>
        </span>
                
      </div>
           
      <div className="clear_both"></div>
    </div>
    </nav>
 
  
  
)
