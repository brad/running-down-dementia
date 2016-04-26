import DocumentTitle from 'react-document-title'
import React from 'react'

import Main from '../../layouts/Main'
import Intro from '../../layouts/Intro'
import Search from '../../layouts/Search'
import Dementia from '../../layouts/Dementia'
import Join from '../../layouts/Join'
import Community from '../../layouts/Community'
import styles from './styles.css'

export default ({ title, body }) => (
  <DocumentTitle title={title}>
    <Main title={title}>     
      <section className={styles.base}>
        <div dangerouslySetInnerHTML={{
          __html: body
        }} />
        <Intro/>   
        <Search/>
        <Dementia/>
        <Join/>
        <Community/>   
      </section>
    </Main>
  </DocumentTitle>
)
