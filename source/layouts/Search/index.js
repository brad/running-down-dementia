import React from 'react'
import styles from './styles.css'

export default ({ currentPage = '' }) => (
     
   <section>        
    <div id="search" className={styles.search}>
        <div className={styles.searchContainer}>
        

            <form className={styles.searchForm} id="fFindFriend">
                    <div className={styles.searchGroup}>
                        <div className={styles.searchIcon}><img src="/layouts/Search/1banner_magnifyer.png" /></div>
                        
                         <input type="text" className={styles.searchInput} title="Enter you friends name." placeholder="FIND A SUPPORTER" id="findmyfriend" name="findmyfriend"/>
                        
                        <span><input type="submit" className={styles.searchButton} value="SEARCH"/></span>
                       
                </div>
            </form>
        

            <div className="clear_both"></div>
        </div>
        </div>
</section>    
   
)
