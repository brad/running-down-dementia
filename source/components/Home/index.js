import DocumentTitle from 'react-document-title'
import React from 'react'

import Main from '../../layouts/Main'
import Intro from '../../layouts/Intro'
import Search from '../../layouts/Search'
import Dementia from '../../layouts/Dementia'
import Join from '../../layouts/Join'
import Community from '../../layouts/Community'
import Social from '../../layouts/Social'
import PersonalStories from '../../layouts/PersonalStories'
import Challenge from '../../layouts/Challenge'
import Maps from '../../layouts/Maps'
import Leaderboards from '../../layouts/Leaderboards'
import styles from './styles.css'

export default ({ title, body }) => (
  <DocumentTitle title={title}>
    <Main title={title}>     
     
        <Intro/>   
        <Search/>
        <Dementia/>
        <Challenge/>
        <Join/>
        <Community/>
        <Maps/>
        <Leaderboards/> 
        <PersonalStories/>
        <Social/>          
     
    </Main>
  </DocumentTitle>
)
