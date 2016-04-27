import React from 'react'
import styles from './styles.css'
import StatsValues from '../StatsValues'


class Stats extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  
    componentDidMount() {

        var edh_api='https://everydayhero.com/api/v2/campaigns/gb-4285.jsonp?callback=?&exclude_charities=true&exclude_pages=true'

        $.ajax({
             url: edh_api,
            dataType: 'json',
            cache: false,
            success: function(data) {

                var edh_fitness =   (data.campaign.fitness_activity_overview.bike.distance_in_meters + data.campaign.fitness_activity_overview.walk.distance_in_meters + data.campaign.fitness_activity_overview.hike.distance_in_meters + data.campaign.fitness_activity_overview.gym.distance_in_meters +  data.campaign.fitness_activity_overview.sport.distance_in_meters + data.campaign.fitness_activity_overview.swim.distance_in_meters)/1000

                var edh_raised = data.campaign.funds_raised.cents/100;

                this.setState({
                data: data.campaign, 
                fitness: edh_fitness,
                raised: edh_raised
               });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
    
    }
  
    render() {
        
        return (
            <StatsValues parkruns={0} data={this.state.data} raised={(this.state.raised)} fitness={Math.round(this.state.fitness)} />
            );
        
    }
}

export default Stats;