import React from 'react'
import NavLink from '../../components/NavLink'
import styles from './styles.css'

export default (props) => (
   <footer>
      
        <div id="footer">
          <div className={styles.footerContainer}>
          
                <div className={styles.iconsContainer}>
                  <div className={styles.iconsBox}><img src="/layouts/Footer/12footer_rddlogo.png" /></div>
                  <div className={styles.iconsBox}><img src="/layouts/Footer/4dementia_icon_parkrun.png" /></div>
                  <div className={styles.iconsBox}><img src="/layouts/Footer/4dementia_icon_aruk.png" /></div>
                  <div className={styles.clearBoth}></div>
                </div>
        </div>

        <div className={styles.footerLinks}>
            <div className={styles.footerLinksContainer}>
              <ul className={styles.footerLinksList}>
                <li className={styles.footerLinksListItem}><a href="#">Blog</a></li>
                <li className={styles.footerLinksListItem}><a href="#">Contact</a></li>
                <li className={styles.footerLinksListItem}><a href="#">Help</a></li>
                <li className={styles.footerLinksListItem}><a href="#">Privacy</a></li>
                <li className={styles.footerLinksListLastItem}><a href="#">Terms and conditions</a></li>
              </ul>
              </div>
          
              <div className={styles.clearBoth}>
        </div>
        </div>
        </div>     

        </footer>
)




