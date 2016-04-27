import React from 'react'
import styles from './styles.css'


class PersonalStoryItem extends React.Component {
     
    render ()
    {
        
        return (
        <div className={styles.storyBox}>
        <div className={styles.storyPic}><img src={this.props.fundraiserimage} /></div>
        <div className={styles.storyName}><p>{this.props.fundraiser}</p></div>
        <div className={styles.storyDescr}><p>{this.props.story}</p></div>
        <div className={styles.storyMore}><a href={this.props.fundraiserurl}>Read more</a></div>
        <div className={styles.storyButton}><a href={this.props.fundraiserurl}>Support me</a></div>
        <div className={styles.clearBoth}></div></div>
        );
    }
   }

export default PersonalStoryItem;


