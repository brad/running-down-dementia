import React from 'react'
import styles from './styles.css'
import FitnessList from '../FitnessList'


class FitnessBoards extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }  
  
 componentDidMount()
 {

    var edh_api='https://everydayhero.com/api/v2/search/fitness_activities_totals.jsonp?callback=?&campaign_id=' + this.props.campaignid + '&group_by=' + this.props.type + '&limit=' + this.props.limit;

    $.ajax({
      url: edh_api,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.results});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  render() {
    return (
        <FitnessList data={this.state.data} />
    );
  }
  
  }


export default FitnessBoards;