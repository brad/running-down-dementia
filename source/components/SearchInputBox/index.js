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
        
          <span>
          <input type="text" onClick={ () => { this.setState({ pageSearchActive: true }) } } className={styles.searchInput} title="Enter you friends name." placeholder="FIND A SUPPORTERS" id="findmyfriend" name="findmyfriend"/>
                         { this.state.pageSearchActive
                            ? <PageSearchModal
                                campaignUid="gb-4943"
                                country="uk"
                                renderIcon={ false }
                                onClose={ () => { this.setState({ pageSearchActive: false }) } }
                            />
                            : null
                        }
                        
          </span>           
        
  
    )
  }
}