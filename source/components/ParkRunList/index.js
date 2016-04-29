import React from 'react'
import styles from './styles.css'
import ParkRunItem from '../ParkRunItem'


class ParkRunList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  render() {
     var positionNodes = this.props.data.map(function(leaderboardPosition) {
      return (
                <ParkRunItem key={leaderboardPosition.id} name={leaderboardPosition.name} value={leaderboardPosition.value} />
      );
    });
    return (
      <ul className="individual">
        {positionNodes}
      </ul>
    );
  }
  
}


export default ParkRunList;