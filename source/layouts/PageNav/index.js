import React from 'react'
import NavLink from '../../components/NavLink'
import styles from './styles.css'
import PageSearchModal from 'edh-widgets/src/components/search/PageSearchModal'

export default class extends React.Component {
  constructor(){
    super()
    this.state = {
      pageSearchActive: false
    }
  }

  render () {
    return (
 
    <nav role='navigation'>
    <div className={styles.navBar} >

      <div className={styles.navbarHeader}>
      
        <div id="mobilemenu" className={styles.mobilemenu}>
          <div className={styles.mobileMenuHolder}>
              <img src="/layouts/PageNav/1banner_icon_mobilemenu.png" width="50" height="50" alt=""/>
          </div>
        </div>
  
        <span className={styles.tools}>
          <ul><li>
          <a id="edh_search" href="#" onClick={ () => { this.setState({ pageSearchActive: true }) } }><img src="/layouts/PageNav/1banner_magnifyer.png" /></a>
                         { this.state.pageSearchActive
                            ? <PageSearchModal
                                campaignUid="gb-4943"
                                country="uk"
                                renderIcon={ false }
                                onClose={ () => { this.setState({ pageSearchActive: false }) } }
                            />
                            : null
                        }
           </li>
            <li><a className={styles.login} href="https://running-down-dementia.everydayhero.com/uk/sign-in">login</a></li>
            <li><a href="#"><img src="/layouts/PageNav/1banner_facebook.png" /></a></li>
            <li><a href="#"><img src="/layouts/PageNav/1banner_twitter.png" /></a></li>
            </ul>
        </span>
        
        <span className={styles.navBarMenu}>
          <ul>
            <li><NavLink to={`#faqs`}>FAQS</NavLink></li>
            <li><NavLink to={`/#participants`}>Participants</NavLink></li>
            <li><NavLink to={`/#leaderboards`}>Leaderboards</NavLink></li>
            <li><NavLink to={`/#about`}></NavLink></li>
          </ul>
        </span>
                
      </div>
           
      <div className="clear_both"></div>
    </div>
    </nav>
  
    )
  }
}