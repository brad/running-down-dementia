import React from 'react'
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
      <section className={ styles.support }>
               
        
         <div id="search" className={styles.search}>
        <div className={styles.searchContainer}>
        

            <form className={styles.searchForm} id="fFindFriend">
                    <div className={styles.searchGroup}>
                        <div className={styles.searchIcon}><img src="/layouts/Search/1banner_magnifyer.png" /></div>
                        
                         <input type="text" className={styles.searchInput} title="Enter you friends name." placeholder="FIND A SUPPORTER" id="findmyfriend" name="findmyfriend"/>
                        
                        <a  className={styles.searchButton} onClick={ () => { this.setState({ pageSearchActive: true }) } }>Search</a>
                         { this.state.pageSearchActive
                            ? <PageSearchModal
                                campaignUid="gb-4943"
                                country="uk"
                                renderIcon={ false }
                                onClose={ () => { this.setState({ pageSearchActive: false }) } }
                            />
                            : null
                        }
                       
                </div>
            </form>
        

            <div className="clear_both"></div>
        </div>
        </div>
        
      </section>
        
       
   
    )
  }
}