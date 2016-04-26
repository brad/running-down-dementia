import DocumentTitle from 'react-document-title'
import React from 'react'

import Main from '../../layouts/Main'
import Intro from '../../layouts/Intro'
import Search from '../../layouts/Search'
import Dementia from '../../layouts/Dementia'
import Join from '../../layouts/Join'
import Community from '../../layouts/Community'
import Social from '../../layouts/Social'
import styles from './styles.css'

export default ({ title, body }) => (
  <DocumentTitle title={title}>
    <Main title={title}>     
      <section className={styles.base}>
        <Intro/>   
        <Search/>
        <Dementia/>
        <Join/>
        <Community/> 
        <Social/>   
      </section>
    </Main>
  </DocumentTitle>
)
