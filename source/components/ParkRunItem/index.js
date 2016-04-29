import React from 'react'
import styles from './styles.css'


class ParkRunItem extends React.Component {
   constructor(props) {
    super(props);
    this.state = { data: [] }
  }   

  render() {
    return (
      <li className="item">
        <span className="position">{this.props.position}</span>
        <span className="photo"><img  src="images/8leaderboards_icon_tree.png"/></span>  
        <span className="raised">{this.props.value}</span>
        <span className="name">{this.props.name}</span>
      </li>
    );
  }
  
  }


export default ParkRunItem;