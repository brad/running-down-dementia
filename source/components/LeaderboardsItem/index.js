import React from 'react'
import styles from './styles.css'


class LeaderboardsItem extends React.Component {
   constructor(props) {
    super(props);
    this.state = { data: [] }
  }   

  render() {
    return (
      <li className={styles.item}>
        <span className={styles.position}>{this.props.position}</span>
        <span className={styles.photo}><img src={this.props.fundraiserimage}/></span>  
        <span className={styles.name}><a target="_blank" href={this.props.fundraiserurl}>{this.props.fundraiser}</a></span>
        <span className={styles.raised}>£{this.props.raised}</span>        
      </li>
    );
  }
  
  }


export default LeaderboardsItem;