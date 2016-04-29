import React from 'react'
import styles from './styles.css'
import PageSearchModal from 'edh-widgets/src/components/search/PageSearchModal'
import SearchInputBox from '../../components/SearchInputBox'



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
                        
                        <SearchInputBox/>
                     
                        
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