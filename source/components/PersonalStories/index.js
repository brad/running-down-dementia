import React from 'react'
import styles from './styles.css'
import PersonalStoryList from '../PersonalStoriesList'


class PersonalStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }
  }
  componentDidMount()
  {
    
    var edh_api='https://everydayhero.com/api/v2/pages.jsonp?callback=?&page=1&campaign_id=gb-4285&limit=3&type=individual&start_updated_at=2016-04-01';

    $.ajax({
      url: edh_api,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data.pages});
        
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        
      }.bind(this)
    }); 
  }
 
  render() {
    return (    
      <section className={styles.personalStories}>
        <div className={styles.personalStoriesContainer}>
          <div className={styles.sectionIcon}><img src="http://network-pages.s3.amazonaws.com/UK/heroix/alzheimerresearchuk/parkrun/images/2getgoing_icon_parkrun.png" />
            <h2>Personal stories</h2>
          </div>
           <PersonalStoryList data={this.state.data} />
           <div className={styles.clearBoth}/>        
          </div>
            
        </section>
         
       
    );
  }
}

export default PersonalStories;