import React from 'react'
import styles from './styles.css'
import LeaderboardsItem from '../LeaderboardsItem'


class LeaderboardsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  render() {
    var positionNodes = this.props.data.map(function(leaderboardPosition) {
      return (
                <LeaderboardsItem position="01" key={leaderboardPosition.id} fundraiser={leaderboardPosition.name} fundraiserimage={leaderboardPosition.image.small_image_url} raised={(leaderboardPosition.amount.cents/100)} fundraiserurl={leaderboardPosition.url}/>
      );
    });
    return (
      <ul className={styles.individual}>
        {positionNodes}
      </ul>
    );
  }
  
}


export default LeaderboardsList;