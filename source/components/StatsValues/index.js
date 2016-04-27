import React from 'react'
import styles from './styles.css'


class StatsValue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  
    componentDidMount() {

        var edh_api='https://everydayhero.com/api/v2/pages.jsonp?campaign_id=gb-4285&type=team&page=1&limit=1&callback=?'
            $.ajax({
            url: edh_api,
            dataType: 'json',
            cache: false,
            success: function(data) {  
                console.log(data.meta);      
                this.setState({
                data: data.meta, 
                });
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
            });
    
    }
  
    render() {
          
          
          return (
            <div className={styles.iconsContainer}>
                <div className={styles.iconsBox}><img src="/assets/img/1banner_icon_parkruns.png" /><span>Parkruns</span><span id="edh_total_1">{this.props.parkruns}</span></div>
                <div className={styles.iconsBox}><img src="/assets/img/1banner_icon_runner.png" /><span>Runners</span><span id="edh_total_2">{this.props.data.page_count-this.state.data.total_pages}</span></div>
                <div className={styles.iconsBox}><img src="/assets/img/1banner_icon_km.png" /><span>Kms</span><span id="edh_total_3">{this.props.fitness}</span></div>
                <div className={styles.iconsBox}><img src="/assets/img/1banner_icon_raised.png" /><span>£ raised</span><span id="edh_total_4">{this.props.raised}</span></div>
                <div className={styles.iconsBox}><img src="/assets/img/1banner_icon_teams.png" /><span>Teams</span><span id="edh_total_5">{this.state.data.total_pages}</span></div>
                <div className={styles.clearBoth}></div>
            </div>
            
            );
        
        
    }
}

export default StatsValue;