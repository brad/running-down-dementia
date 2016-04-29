import React from 'react'
import styles from './styles.css'
import LeaderboardList from '../LeaderboardsList'


class Leaderboards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }  
  
 componentDidMount()
 {
    console.log ('Leader');
    console.log (this.props.campaignid);

    var edh_api='https://everydayhero.com/api/v2/campaigns/' + this.props.campaignid + '/leaderboard.jsonp?&callback=?&include_pages=true&type=' + this.props.type + '&limit=' + this.props.limit;

    $.ajax({
      url: edh_api,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.leaderboard.pages});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return (
        <LeaderboardList data={this.state.data} />
    );
  }
  
  }


export default Leaderboards;